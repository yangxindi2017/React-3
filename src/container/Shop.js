import React, { Component } from 'react'
import { NavBar, Carousel,Grid,SearchBar} from 'antd-mobile';
import '../index.css';

export default class Inspiration extends Component{
    state = {
        data: ['1', '2','3','4'],
        imgHeight: 200
      }
      componentDidMount() {
        setTimeout(() => {
            this.setState({
                data: ['3818611563,2047722036&fm=26&gp=0','1998887098,3229802957&fm=26&gp=0','1495770202,2910037955&fm=26&gp=0',
                    '2499034959,2053713498&fm=26&gp=0'],
            });
        }, 100);
      }

      onChange= (value) => {
        this.setState({ value });
      };
      clear = () => {
        this.setState({ value: '' });
      };
      handleClick = () => {
        this.manualFocusInst.focus();
      }
    render(){
          const icon1=[
              {title:'桌',icon:'iconfont icon-zhuozi',bgcolor:'#fd417b'},
              {title:'床',icon:'iconfont icon-chuang',bgcolor:'#54cfff'},
              {title:'椅',icon:'iconfont icon-yizi',bgcolor:'#fc9c1d'},
              {title:'茶',icon:'iconfont icon-chaji',bgcolor:'#2ad3d2'},
              {title:'柜',icon:'iconfont icon-guizi',bgcolor:'#fc302f'},
              {title:'书架',icon:'iconfont icon-shujia',bgcolor:'#3b3bf6'},
              {title:'沙发',icon:'iconfont icon-shafa',bgcolor:'#ba3dff'},
              {title:'家居饰品',icon:'iconfont icon-jiajushipin',bgcolor:'#38df81'},
              {title:'户外家居',icon:'iconfont icon-huwaijiaju',bgcolor:'#8f86c1'},
              {title:'全部分类',icon:'iconfont icon-quanbufenlei',bgcolor:'#8f8e95'}


          ]
          const data1 = icon1.map((val,i) => ({
            title:val.title,
            icon:val.icon,
            bgcolor:val.bgcolor
        }));
        
        return(
            <div>
                {/* 导航栏 */}
                <div>
                    <NavBar
                        style={{background:'#3fcccb'}}
                        rightContent={[
                            <i key="0" className='iconfont icon-che'> </i>
                        ]}
                    >
                        商城
                    </NavBar>
                </div>
                    {/* 搜索框 */}
                    <div>
                        <SearchBar placeholder="输入关键字搜索" maxLength={8} />
                    </div>
                        
                    {/* 轮播图 */}
                <Carousel
                    autoplay={true} //自动轮播
                    infinite //循环轮播
                >
                    {this.state.data.map(val => (
                        <div
                        key={val}
                        style={{ display: 'flex'}}
                        >
                            <img 
                                src={`https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=+${val}.jpg`}
                                alt=""
                                style={{ width: '100%', height:this.state.imgHeight,verticalAlign: 'top' }}
                            />
                        </div>
                    ))}

                </Carousel>
                
                {/* 宫格 */}
                <div>

                <Grid data={data1}
                columnNum={5}
                
                renderItem={dataItem => (
                    <div style={{ textAlign:"center" }}>
                        <div style={{background:`${dataItem.bgcolor}`}} className="icon">
                            <i className={dataItem.icon}></i>
                        </div>
                        <div style={{ width:'100%',color: '#2f2f2f', fontSize: '1vw' }}>
                            <span>{dataItem.title}</span>
                        </div>
                    </div>
                )}
                />

            </div>
                
                <div className="shop" style={{lineHeight:'20px'}}>
                    <div className='shop1' style={{marginRight:'5px'}}> 
                        <img src={require('../images/shop_1.jpg')} alt=""/>   
                        <p style={{color:'#686868',fontSize:'2vw'}}>Top Art Studio 欧式风格精...</p>
                        <p style={{color:'#000',fontSize:'2vw'}}>￥39.95</p>
                    </div>
                    <div className='shop1'>
                        <img src={require('../images/shop_2.png')} alt=""/>  
                        <p style={{color:'#686868',fontSize:'2vw'}}>顺顺工艺欧式风格塑料外框...</p>
                        <p style={{color:'#000',fontSize:'2vw'}}>￥83.99</p>
                    </div>
                    
                </div>
                <div className="shop" style={{lineHeight:'20px'}}>
                    <div className='shop1' style={{marginRight:'5px'}}> 
                        <img src={require('../images/shop_1.jpg')} alt=""/>   
                        <p style={{color:'#686868',fontSize:'2vw'}}>Top Art Studio 欧式风格精...</p>
                        <p style={{color:'#000',fontSize:'2vw'}}>￥39.95</p>
                    </div>
                    <div className='shop1'>
                        <img src={require('../images/shop_2.png')} alt=""/>  
                        <p style={{color:'#686868',fontSize:'2vw'}}>顺顺工艺欧式风格塑料外框...</p>
                        <p style={{color:'#000',fontSize:'2vw'}}>￥83.99</p>
                    </div>
                    
                </div>
 
        </div>
        )
    }
}


            