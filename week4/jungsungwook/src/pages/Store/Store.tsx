import OrderBar from "../../components/OrderBar/OrderBar"
import BackBar from "../../components/BackBar";
import StoreInfo from "../../components/StoreInfo";
import stores from "../../models/stores";
import StoreItems from "../../components/StoreItems";

import type { Menu,SelectedMenu } from "../../types";
import { useState } from "react";


const Store = () => {

    //상태를 배열로 저장
    const [selectedMenus,SetSelectedMenus] = 
        useState<SelectedMenu[]>([]);

    const AddMenuHandler = (menu : Menu) =>{
        SetSelectedMenus((prev)=>{
            //이미 담겨져있는지 확인
            const exist = prev.some(
                (item) => item.menu.id === menu.id
            );

            //담겨져있으면 + 1
            if(exist){
                return prev.map((item)=>
                    item.menu.id === menu.id ?
                    {...item,quantity : item.quantity + 1}
                    :item
                );
            }

            //아니면 1
            return [...prev,{menu,quantity:1}];
        });
    };

    //set 함수가 다시 실행될 때 Store 함수 컴포넌트를 다시 호출하기에 
    //아래 변수도 새롭게 선언된다 따라서 굳이 또 total price 상태를 만들어 줄 필요가 없다
    const totalPrice = selectedMenus.reduce(
        (sum,item) => sum + item.menu.price * item.quantity,
        0
    );

    return (
        <div className="mt-[41px] w-[390px] flex flex-col">
        <BackBar orderCancel={false} />
       

        <StoreInfo store = {stores[0]}>
        </StoreInfo>
        
        <StoreItems menus = {stores[0].menus}
            addMenu = {AddMenuHandler}
        >

        </StoreItems>


        <OrderBar totalPrice = {totalPrice}>

        </OrderBar>
    </div>
    )
}

export default Store
