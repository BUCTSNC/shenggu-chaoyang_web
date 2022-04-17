import { Audit, Book, Bookshelf, BuildingFour, Bus, Classroom, DocumentFolder, DoorHandle, Earth, Edit, Hospital, IdCard, Landscape, Like, Photograph, PokeballOne, Printer, ShoppingCartOne, ShoppingMall, SingleBed, Wifi, Word } from "@icon-park/react";
import React from "react";
import { createUseStyles } from "react-jss";
import { useHistory } from "react-router-dom";
import { DeepPurpleBlue, LightBlue2, LightOrange, StrawBerry } from "../ColorCard";

const useStyles = createUseStyles({
    linkItem: {
        "&:hover": {
            boxShadow: "10px 10px 32px rgba(0,0,0,0.3)",
            cursor: "pointer"
        }
    }
});

type LinkInfo = {
    icon: JSX.Element, title: string, intro: string; src: string;
};

type CardInfo = {
    color: string,
    title: string, items: LinkInfo[];
};

export default function Navigation() {//卡片布局
    const colors1 = [LightOrange, LightBlue2];
    const colors2 = [StrawBerry, DeepPurpleBlue];
    const XYSH: CardInfo = {
        color: LightOrange,
        title: "校园生活",
        items: [
            { title: "交通出行", intro: "班车/公交/地铁", icon: <Bus theme="outline" size="40" fill="#F2F2F2" />, src: "XYSH/BCYY" },
            { title: "宿舍生活", intro: "会客厅/咖啡机/服务中心", icon: <SingleBed theme="outline" size="40" fill="#F2F2F2" />, src: "XYSH/Dormitory_Service" },
            { title: "校园超市", intro: "麦叔的铺子/便利店/购物", icon: <ShoppingCartOne theme="outline" size="40" fill="#F2F2F2" />, src: "XYSH/School_Supermarket" },
            { title: "创享商圈", intro: "理发/桌游/花店", icon: <ShoppingMall theme="outline" size="40" fill="#F2F2F2" />, src: "XYSH/Chuangxsq" },
            { title: "图书服务", intro: "图书馆/检索服务", icon: <Book theme="outline" size="40" fill="#F2F2F2" />, src: "XYSH/Library_Service" },
            { title: "医疗服务", intro: "校医院/后勤楼", icon: <Hospital theme="outline" size="40" fill="#F2F2F2" />, src: "XYSH/XYY" }
        ]
    }
    const XXZY: CardInfo = {
        color: LightBlue2,
        title: "学习资源",
        items: [

            { title: "学习资源", intro: "校园官网/数字校园", icon: <Bookshelf theme="outline" size="40" fill="#F2F2F2" />, src: "学习资源/XueXiZiYuan" },
            { title: "图书资源", intro: "图书馆/检索服务", icon: <DocumentFolder theme="outline" size="40" fill="#F2F2F2" />, src: "学习资源/XueXiZiYuan" },
            { title: "中国知网", intro: "中国知网/文献查询", icon: <Edit theme="outline" size="40" fill="#F2F2F2" />, src: "学习资源/XueXiZiYuan" },
            { title: "自习位置", intro: "教学楼/图书馆/宿舍楼", icon: <Classroom theme="outline" size="40" fill="#F2F2F2" />, src: "学习资源/XueXiZiYuan" },
            { title: "课程网站", intro: "专业课/技能课/科普课", icon: <Earth theme="outline" size="40" fill="#F2F2F2" />, src: "学习资源/XueXiZiYuan" },
            { title: "学习软件", intro: "外语学习/习惯养成", icon: <Word theme="outline" size="40" fill="#F2F2F2" />, src: "学习资源/XueXiZiYuan" }

        ]
    }
    const XYFG: CardInfo = {
        color: DeepPurpleBlue,
        title: "校园风光",
        items: [
            { title: "建筑风光", intro: "教学楼/宿舍楼", icon: <BuildingFour theme="outline" size="40" fill="#F2F2F2" />, src: "校园风光/campus building" },
            { title: "自然风景", intro: "白昼/傍晚/夜景", icon: <Landscape theme="outline" size="40" fill="#F2F2F2" />, src: "校园风光/campus landscape" },
            { title: "校园团宠", intro: "野鸭/天鹅/小猫", icon: <PokeballOne theme="outline" size="40" fill="#F2F2F2" />, src: "校园风光/campus pets" },
        ]
    }
    const FWZN: CardInfo = {
        color: StrawBerry,
        title: "服务指南",
        items: [
            { title: "服务大厅", intro: "学业发展/户籍/征兵", icon: <Audit theme="outline" size="40" fill="#F2F2F2" />, src: "服务指南/AcademicDevelopmentCounseling" },
            { title: "校园网攻略", intro: "信息中心/校园网", icon: <Wifi theme="outline" size="40" fill="#F2F2F2" />, src: "服务指南/XYWGL" },
            { title: "修缮服务", intro: "物业/设备报修", icon: <DoorHandle theme="outline" size="40" fill="#F2F2F2" />, src: "服务指南/SSBX" },
            { title: "心理咨询", intro: "心理健康/心理咨询", icon: <Like theme="outline" size="40" fill="#F2F2F2" />, src: "服务指南/XLZX" },
            { title: "自助机器", intro: "自助补卡/成绩打印/圈存机/自助售票", icon: <Printer theme="outline" size="40" fill="#F2F2F2" />, src: "服务指南/ZZJQ" },
            { title: "校园卡服务", intro: "校园卡充值补办", icon: <IdCard theme="outline" size="40" fill="#F2F2F2" />, src: "服务指南/XYKGL" }

        ]
    }
    return <div style={{ display: 'flex', justifyContent: 'center', flexDirection: "row", flexWrap: "wrap", marginTop: '3vh' }}>
        <div style={{ display: 'flex', flexDirection: "row", justifyContent: 'space-around', flexWrap: "wrap" }}>
            <Card info={XXZY} />
            <Card info={FWZN} />
        </div>
        <div style={{ display: 'flex', flexDirection: "row", justifyContent: 'space-around', flexWrap: "wrap" }}>
            <Card info={XYSH} />
            <Card info={XYFG} />
        </div>
    </div>;
}

function Card(props: { info: CardInfo }) {//卡片内容
    const { info } = props;
    return <div style={{ textAlign: "center", backgroundColor: info.color, color: "white", padding: '0.8vw', margin: '0.8vw' }}>
        <div style={{ fontSize: "1.2rem", fontWeight: 600, paddingTop: '4px' }}>{info.title}</div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 50%)" }}>
            {info.items.map((item, index) => <Link key={index} link={item} />)}
        </div>
    </div>;
}

function Link(props: { link: LinkInfo; }) {//链接内容
    const { linkItem } = useStyles();
    const { link } = props;
    const history = useHistory();
    return <div style={{ margin: 8, padding: 4, maxWidth: 96 }} className={linkItem} onClick={() => history.push(`/post/${link.src}`)}>
        {link.icon}
        <div style={{fontWeight:550}}>{link.title}</div>
        <div style={{color:"#FFFFFF90"}}>{link.intro}</div>
    </div>;
}
