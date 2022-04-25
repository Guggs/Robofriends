import React from 'react';

interface Props {
    children: React.ReactElement
}

const Scroll = (props: Props) => {

    const {children} = props

      return (
          <div style={{overflowY: 'scroll', borderTop: '1px solid black', height: '500px'}}>
              {children}
          </div>
      )
}

export default Scroll;