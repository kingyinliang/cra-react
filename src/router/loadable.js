import React from 'react';
import Loadable from 'react-loadable';
import '../style/load.styl'
// 按需加载组件
export default function withLoadable (comp) {
  return Loadable({
    loader:comp,
    loading:(props)=>{
      let msg
      if (props.error) {
        return <p>加载错误，请刷新</p>
      } else if (props.timedOut) {
        return <p>加载超时</p>
      } else if (props.pastDelay) {
        return(
          <div className='loading-mask'>
            <div className='container'>
              <img className='loading-img' src={require('../assets/img/loading.gif')} />
            </div>
          </div>
        )
      } else {
        return null;
      }
    },
    timeout:10000
  })
}
