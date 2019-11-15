import React, { Component } from 'react'
import { NavBar,Carousel} from 'antd-mobile';
import '../font.css'
import '../index.css'

export default class AppHome extends Component {
    state = {
        data: ['1', '2'],
        imgHeight: 200,
      }
      componentDidMount() {
        // simulate img loading
        setTimeout(() => {
          this.setState({
            data: ['1573555377262&di=dd0d385db0a4ede32d97e1d6a294748d&imgtype=0&src=http%3A%2F%2Fimg002.hc360.cn%2Fk3%2FM0B%2F70%2FC2%2FwKhQx1f8xxiEO6j3AAAAANYSimc808',
             '1573556349210&di=0760ca6315a412f375c3e6ceb402a256&imgtype=0&src=http%3A%2F%2Fpic1.nipic.com%2F2009-01-06%2F20091614240599_2'],
          });
        }, 100);
      }
      render() {
        return (
            <div>
                <NavBar
                    style={{background:'#3fcccb'}}
                >
                   住吧家居
                </NavBar>

                <Carousel
                    autoplay={true} //自动轮播
                    infinite //循环轮播
                >
                    {this.state.data.map(val => (
                    <div key={val} style={{display:"flex"}}>
                      <img
                          src={`https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=+${val}.jpg`}
                          alt=""
                          style={{ width: '100%', verticalAlign: 'top'}}
                      />
                    </div>
                    ))}
                </Carousel>

                <div className="home">
                  <div className="home_item"> 
                    <img alt="" src='https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3064523058,253620133&fm=26&gp=0.jpg' />
                    <div className="cover"></div>
                    <span className="Hfont">热门品牌</span>

                  </div>
                  <div className="home_item">
                    <img alt="" src='https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1416109263,153951006&fm=26&gp=0.jpg' />
                    <div className="cover"></div>
                    <span className="Hfont">私人搭配师</span>

                  </div>
                  <div className="home_item" style={{marginRight:"0px"}}>
                    <img alt="" src='https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2873966934,1745419247&fm=26&gp=0.jpg' />
                    <div className="cover"></div>
                    <span className="Hfont">选购指南</span>
                  </div>
                </div>

                {/* 热门推荐 */}
                <div>
                    <p className="recommend"><span>热门推荐</span></p>
                </div>
                {/* 英伦风 */}
                <div className="recommendImg">
                  <img alt="" style={{width:"100%"}} src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1269966226,1885465804&fm=15&gp=0.jpg"/>
                  <span>什么是英伦装修风格 英伦风家装 英伦风格装修效果图</span>    
                </div>
            </div>
        
            
        )
    }
}
