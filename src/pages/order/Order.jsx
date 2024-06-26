import { useState } from "react";
import orderImg from "../../assets/shop/banner2.jpg"
import useMenu from "../../hooks/useMenu";
import Cover from "../Shared/Cover";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import OrderTab from "./orderTab/OrderTab";
import { useParams } from "react-router-dom";

const Order = () => {
    const categories = ['salad','pizza','soup','dessert','drinks'];
    const {category} = useParams();
    const categoriesIndex = categories.indexOf(category)
    const [tabIndex,setTabIndex] = useState(categoriesIndex);
    
    console.log(category);
    const [menu] = useMenu();
    // console.log(menu);
    const dessert = menu.filter(item=> item.category === "dessert");
  const drinks = menu.filter(item=> item.category === "drinks");
  const pizza = menu.filter(item=> item.category === "pizza");
  const salad = menu.filter(item=> item.category === "salad");
  const soup = menu.filter(item=> item.category === "soup");
    return (
        <div>
            <Cover img={orderImg} title="our shop"  description="Would you like to try a dish?"></Cover>
            <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
      <TabList className="flex justify-center mt-10 font-bold">
        <Tab>SALAD</Tab>
        <Tab>PIZZA</Tab>
        <Tab>SOUP</Tab>
        <Tab>DESSERT</Tab>
        <Tab>DRINKS</Tab>
        
      </TabList>
      <TabPanel>
       <OrderTab items={salad}></OrderTab>
      </TabPanel>
      <TabPanel>
      <OrderTab items={pizza}></OrderTab>
      </TabPanel>
      <TabPanel> 
      <OrderTab items={soup}></OrderTab>
      </TabPanel>
      <TabPanel> 
      <OrderTab items={dessert}></OrderTab>
      </TabPanel>
      <TabPanel>
      <OrderTab items={drinks}></OrderTab>
      </TabPanel>
    </Tabs>
        </div>
    );
};

export default Order;