import React, { useContext } from 'react'
import { Context } from '../../Context/ContextWrapper';
import { ApplyReqWL } from '../Components/ApplyReqWL/ApplyReqWL';
import { PrivateSale } from '../Components/PrivateSale/PrivateSale';
import { PublicSale } from '../Components/PublicSale/PublicSale';
import { ReqWhiteList } from '../Components/ReqWhiteList/ReqWhiteList';

const Home = () => {

    const {user} = useContext(Context)

    if(!user.wallet){
        return <p className="text-center" style={{fontSize: "1.7rem"}}>Войдите в аккаунт</p>
    }

  return (
    <div style={{width: "100%",display: "flex",flexDirection: "column", alignItems: "center"}}>
        <p style={{fontSize: "1.6rem"}}>Ваш логин: {user.login}</p>
        <p style={{fontSize: "1.6rem"}}>Ваш адрес: {user.wallet}</p>
        <p style={{fontSize: "1.6rem"}}>Ваш баланс: {user.balance}</p>
        <p style={{fontSize: "1.6rem"}}>У вас {user.seedToken} seed токенов</p>
        <p style={{fontSize: "1.6rem"}}>У вас {user.privToken} private токенов</p>
        <p style={{fontSize: "1.6rem"}}>У вас {user.publToken} public токенов</p>
        {user.inWhiteList ? <p className="text-center" style={{fontSize: "1.6rem"}}>Вы в вайтлисте!</p> : <ReqWhiteList address={user.wallet}/>}
        {user.role == 2 ? <ApplyReqWL address={user.wallet}/> : undefined}
        <PrivateSale address={user.wallet}/>
        <PublicSale address={user.wallet}/>
    </div>
  )
}
export default Home;
