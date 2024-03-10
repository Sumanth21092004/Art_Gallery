import React from 'react'
import { Tabs} from 'antd';
import Products from './Products';

function Profile() {
  return (
    <div>
        <Tabs defaultActiveKey="1">
            <Tabs.TabPane tab="Add Arts" key="1">
                <Products />
            </Tabs.TabPane>
            <Tabs.TabPane tab="Your Orders" key="2">
                <h1>Requsts</h1>
            </Tabs.TabPane>
            <Tabs.TabPane tab="About us" key="3">
                <h1>This project prepared by:-</h1>
                <h2>2200031948-M.Sumanth</h2>
                <h3>Project Title:-Online Art Gallery</h3>
                <h4>description:-</h4>
                <h5>The Online Art Gallery is a web-based platform that showcases and promotes various artworks, allowing artists to exhibit their creations and art enthusiasts to explore and purchase artworks online. The platform serves as a virtual art gallery, providing a curated collection of paintings, sculptures, photographs, digital art, and other forms of visual art. It aims to connect artists with art lovers, promote art appreciation, and facilitate art sales and transactions.   </h5>

            </Tabs.TabPane>
        </Tabs>
    </div>
  )
}

export default Profile