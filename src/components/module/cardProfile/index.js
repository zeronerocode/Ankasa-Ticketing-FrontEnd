import React, { useEffect } from 'react'
import styles from './cardProfile.module.css'
import Card from '../../base/card/index'
import Button from '../../base/button/index'
import Input from '../../base/input/index'
import UserLogo from '../../../assets/user.png'
import Setting from '../../../assets/setting.png'
import Rating from '../../../assets/rating.png'
import LogOut from '../../../assets/logOut.png'

import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { detailUserAction } from '../../../configs/redux/actions/detailUserAction'
import Avatar from '../../../assets/avatar.png'
import { Link } from 'react-router-dom'

const ProfileCard = ( className ) => {
    useEffect(() => {
        dispatch(detailUserAction(id))
     // eslint-disable-next-line react-hooks/exhaustive-deps
     },[])
  
    //  const navigate = useNavigate()
     const dispatch = useDispatch()
    //  const [active, setActive] = useState('portfolio')
     const {id} = useParams()
     const { detailUser : { data } } = useSelector(state => state)
    //  const [portoEx, setPortoEx] = useState({})
  return (
    <>
    <div className={className}>
        <Card className={styles.card}/>
                <div>
               <img src={data.profile.length > 0 ? data.profile[0].photo : Avatar} alt='photoprofile'/>
                </div>
                <div className={styles.upload}>
                <Button className={styles.btn} title="Select Photo"  />
                <Input id="selectFile" type="file"  />
                        <div className={styles.userName}>{data.profile.length > 0 ? data.profile[0].username : ""}</div>
                        <div className={styles.userOrigin}>{data.profile.length > 0 && data.profile[0].city}</div>
                <div className={styles.cards}>Cards</div>
                <Button className={styles.btn2} title="+ Add" />
                <div className={styles.cardBox} />
                    <p className={styles.cardNumber}>7569511535</p>
                    <p className={styles.cardBank}>BCA</p>
                    <p className={styles.cardSaldo}>$ 250,00</p>
                <div className={styles.wrapper}>
                    <Link to="/Profile">
                        <img src={UserLogo} className={styles.userLogo} alt="user"/><p>Profile</p>
                    </Link>
                </div>
                <div className={styles.wrapper2}>
                    <img src={Rating} className={styles.rating} alt="user" /><p>My Review</p>
                </div>
                <div className={styles.wrapper3}>
                    <img src={Setting} className={styles.setting} alt="user" /><p>Setting</p>
                </div>
                <div className={styles.wrapper4}>
                    <img src={LogOut} className={styles.logout} alt="user" /><p>Logout</p>
                </div>
                </div>
        </div>
    </>
  )
}

export default ProfileCard