import React, { Component } from 'react'
import { NavBar} from 'antd-mobile';

export default class AppHome extends Component {
    
      render() {
        return (
            <div>
                <NavBar
                    style={{background:'#3fcccb'}}
                >
                   我的
                </NavBar>
            </div>
            
        )
    }
}
