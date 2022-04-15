import '@icon-park/react/styles/index.css';
import { Modal } from 'antd';
import "antd/dist/antd.css";
import { Definitions } from 'octa';
import React, { createContext, useEffect, useState } from 'react';
import { useLocation } from "react-router-dom";
import './App.css';
import SearchPad from './components/SearchPad';
import Bottom from './layouts/Bottom';
import { Main } from './layouts/Main';
import Navibar from './layouts/Navibar';
import ScrollToTopBtn from './layouts/ScrollToTopBtn';
import SearchBtn from './layouts/SearchBtn';

export const CateTree = createContext<Definitions.CategoryProps>({ alias: "root", path: ".", childCates: [], childPosts: [] });
export const SearchViewCtx = createContext((viewable: boolean) => { });

function App() {
  const [tree, setTree] = useState<Definitions.CategoryProps>({
    alias: "root", path: ".", childCates: [], childPosts: []
  });
  const location = useLocation();
  const [searchView, searchViewSwitch] = useState(false);
  useEffect(() => {
    fetch("/posts/tree.json").then(res => res.json() as Promise<Definitions.CategoryProps>).then(setTree);
  }, []);
  return (
    <div id="App">
      <CateTree.Provider value={tree}>
        <SearchViewCtx.Provider value={searchViewSwitch}>
          <div className='topbar'>
            <Navibar />
          </div>
          <div className='viewbox'>
            <Main />
            <Bottom />
          </div>
          <SearchBtn onClick={() => searchViewSwitch(true)} />
          <ScrollToTopBtn />
          <Modal
            style={{ top: 0 }}
            visible={searchView}
            title={null} onCancel={() => searchViewSwitch(false)}
            closable={false}
            footer={null}
            destroyOnClose
          >
            <SearchPad onRouting={() => searchViewSwitch(false)} />
          </Modal>
        </SearchViewCtx.Provider>
      </CateTree.Provider>
    </div>
  );
}

export default App;
