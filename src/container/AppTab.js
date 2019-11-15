import React from 'react'
import { TabBar } from 'antd-mobile';
import AppHome from './AppHome';
import Inspiration from './Inspiration';
import Shop from './Shop';
import My from './My';
import '../font.css'

export default class AppTab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'blueTab',
    };
  }
  render() {
    return (
        <div style={{ 
            position: 'fixed', 
            height: '100%', 
            width: '100%', 
            top: 0 
        }}>
            <TabBar
              unselectedTintColor="#686868"
              tintColor="#3fcccb" 
              barTintColor="white"
            >
            <TabBar.Item
                title="首页"
                key="home"
                icon={
                  <div className='iconfont icon-fangzicopy'></div>
                }
                selectedIcon={
                  <i className='iconfont icon-fangzicopy'></i>

                }
                
                selected={this.state.selectedTab === 'blueTab'}
                onPress={() => {
                    this.setState({
                        selectedTab: 'blueTab',
                    });
                }}
            >
            <AppHome/>
          </TabBar.Item>
          
          <TabBar.Item
            icon={
              <i className='iconfont icon-dengpao'></i>
            }
            selectedIcon={
              <i className='iconfont icon-dengpao'></i>
            }
            title="灵感"
            key="Inspiration"
            selected={this.state.selectedTab === 'redTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'redTab',
              });
            }}
          >
          <Inspiration/>
          </TabBar.Item>
          
          <TabBar.Item
            icon={
              <i className='iconfont icon-dianpu-copy'></i>
            }
            selectedIcon={
              <i className='iconfont icon-dianpu-copy'></i>
              
            }
            title="商城"
            key="shop"
            selected={this.state.selectedTab === 'greenTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'greenTab',
              });
            }}
          >
            <Shop/>
          </TabBar.Item>
          <TabBar.Item
            icon={
              <i className='iconfont icon-person'></i>
            }
            selectedIcon={
              <i className='iconfont icon-person'></i>
            }
            title="我的"
            key="my"
            selected={this.state.selectedTab === 'yellowTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'yellowTab',
              });
            }}
          >
            <My/>
          </TabBar.Item>
        </TabBar>
      </div>
    );
  }
}