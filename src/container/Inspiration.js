import React, { Component } from 'react'
import { NavBar, Icon ,Tabs,WhiteSpace ,Flex} from 'antd-mobile';

export default class Inspiration extends Component{
    //内容盒子
    renderContent = tab =>
    {
        const PlaceHolder = ({ className = '', ...restProps }) => (
            <div className={`${className} placeholder`} {...restProps}>
                {/* <img src = {require("../images/insp_1.png")} /> */}
                {tab.content}
            </div>
        );
        return(
            <div style={{ display: 'flex', paddingTop:'10px' ,alignItems: 'center', justifyContent: 'center',backgroundColor: '#eeeeee' }}>
                <div>
                    <Flex>
                        <Flex.Item><PlaceHolder /></Flex.Item>
                        <Flex.Item><PlaceHolder /></Flex.Item>
                    </Flex>

                    <WhiteSpace size="lg" />
                    <Flex >
                        <Flex.Item><PlaceHolder /></Flex.Item>
                        <Flex.Item><PlaceHolder /></Flex.Item>
                    </Flex>

                    <WhiteSpace size="lg" />
                    <Flex >
                        <Flex.Item><PlaceHolder /></Flex.Item>
                        <Flex.Item><PlaceHolder /></Flex.Item>
                    </Flex>
                    <WhiteSpace size="lg" />
                </div>
        </div>
        )
    };

    render(){
        const tabs = [
            { title: '推荐',content:<img src = {require("../images/insp_1.png")} alt=""/> },
            { title: '冬季' ,content:<img src = {require("../images/insp_2.png")} alt=""/> },
            { title: '宜家' ,content:<img src = {require("../images/insp_3.jpg")} alt=""/> },
            { title: '小清新' ,content:<img src = {require("../images/insp_4.png")} alt=""/> },
            { title: '小户型',content:<img src = {require("../images/insp_1.png")} alt=""/>  },
            { title: '个性色彩' ,content:<img src = {require("../images/insp_2.png")} alt=""/> }
        ];
        
        
        return(
            
            <div>
                {/* 导航栏 */}
                <div>
                    <NavBar
                        style={{background:'#3fcccb'}}
                        rightContent={[
                            <Icon key="0" type="search" style={{marginRight:'0px'}} />
                        ]}
                    >
                        灵感
                    </NavBar>
                </div>
               
                {/* 标签页 */}
                <div>
                    <Tabs 
                    tabs={tabs}
                    initialPage={0}//推荐页
                    renderTabBar={props => <Tabs.DefaultTabBar {...props} page={5} />}
                    tabBarActiveTextColor="#3fcccb"
                    tabBarInactiveTextColor='#3e3e3e'
                    >
                        {this.renderContent}
                    </Tabs>
                </div>
                
                
           
        </div>
        )
    }
}


            