import React from 'react'
import Section from './Section'

const Home = () => {
    return (
        <div>
            <Section
                title="Model S"
                description="Order Online for Touchless Delivery"
                bgImg="https://tesla-cdn.thron.com/delivery/public/image/tesla/32e5e0f3-5c04-42ef-8f8f-c6b1c26f8a9e/bvlatuR/std/2880x1800/ms-main-hero-desktop"
                leftBtnText="Custom Order"
                rightBtnText="Existing Inventory"
            />
            <Section
                title="Model 3"
                description="Order Online for Touchless Delivery"
                bgImg="https://tesla-cdn.thron.com/delivery/public/image/tesla/c82315a6-ac99-464a-a753-c26bc0fb647d/bvlatuR/std/1200x628/lhd-model-3-social"
                leftBtnText="Custom Order"
                rightBtnText="Existing Inventory"
            />
            <Section
                title="Model X"
                description="Order Online for Touchless Delivery"
                bgImg="https://www.tesla.com/sites/default/files/images/blogs/model-x-blog.jpg"
                leftBtnText="Custom Order"
                rightBtnText="Existing Inventory"
            />
            <Section
                title="Model Y"
                description="Order Online for Touchless Delivery"
                bgImg="https://stimg.cardekho.com/images/carexteriorimages/930x620/Tesla/Tesla-Model-Y/6396/1552894185017/front-left-side-47.jpg"
                leftBtnText="Custom Order"
                rightBtnText="Existing Inventory"
            />
            <Section
                title="Lowest Cost Solar Panels in America"
                description="Money-back guarantee"
                bgImg="https://electrek.co/wp-content/uploads/sites/3/2020/05/Tesla-Solar-hero.jpg?quality=82&strip=all"
                leftBtnText="Order Now"
                rightBtnText="Learn More"
            />
            <Section
                title="Solar for New Roofs"
                description="Solar Roof Costs Less Than a New Roof Plus Solar Panels"
                bgImg="https://cdn.shopify.com/s/files/1/0196/5170/files/solar-roof_design_D.jpg?v=1620232641"
                leftBtnText="Order Now"
                rightBtnText="Learn More"
            />
            <Section
                title="Accessories"
                description=""
                bgImg="https://i2.wp.com/hipertextual.com/wp-content/uploads/2020/01/hipertextual-2020142593.png?fit=1200%2C827&ssl=1"
                leftBtnText="Order Now"
                rightBtnText=""
            />
        </div>
    )
}

export default Home

