import { useLocation } from "react-router-dom";

import {OrderSuccess} from "./components/OrderSuccess";
import { OrderFail } from "./components/OrderFail";

import  { useTitle }  from "../../hooks/useTitle";


export const OrderPage = () => {

    const {state} = useLocation();
    useTitle("Order Summary")

  return (
    <main>
        {state.status ? <OrderSuccess data={state.data}/> : <OrderFail/>}
    </main>
  )
}
