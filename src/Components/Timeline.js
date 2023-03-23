import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {BsCheck2} from 'react-icons/bs'
import {AiFillMedicineBox} from 'react-icons/ai'
import {GiBed} from 'react-icons/gi'
import {FaBed} from 'react-icons/fa'

import '../Styles/main.css'

const Timeline = ()=>(
    <div className='timeline-container'>
        <VerticalTimeline
            animate={false}
            layout="1-column-left"
            lineColor='#8AA9B5'
        >
            <VerticalTimelineElement
                className='timline-card'
                contentStyle={{backgroundColor:'transparent',color:"#555555"}}
                contentArrowStyle={{border:'none'}}
                date="Dec 06 2021 08:36AM"
                iconStyle={{background:"#3AB748",color:"#ffffff"}}
                icon={<BsCheck2/>}
            >
                <h3>Admission Request</h3>
                <div className='alignment-name'>
                    <i class="fa-solid fa-user-doctor"></i>
                    <p className='para-doctor'>Ratha AP</p>
                </div>
                
            </VerticalTimelineElement>

            <VerticalTimelineElement
                className='timline-card'
                contentStyle={{backgroundColor:'transparent',color:"#555555"}}
                contentArrowStyle={{border:'none'}}
                date="Dec 06 2021 09:00AM"
                iconStyle={{background:"#3AB748",color:"#ffffff"}}
                icon={<BsCheck2/>}
            >
                <h3>Sent for IGL Approval</h3>
                <div className='alignment-name'>
                    <i class="fa-solid fa-user-doctor"></i>
                    <p className='para-doctor'>Jim Chin</p>
                </div>
                
            </VerticalTimelineElement>

            <VerticalTimelineElement
                className='timline-card'
                contentStyle={{backgroundColor:'transparent',color:"#555555"}}
                contentArrowStyle={{border:'none'}}
                date="Dec 06 2021 11:23AM"
                iconStyle={{background:"#3AB748",color:"#ffffff"}}
                icon={<BsCheck2/>}
            >
                <h3>Recieved IGL Approval</h3>
                <div className='alignment-name'>
                    <i class="fa-solid fa-user-doctor"></i>
                    <p className='para-doctor'>Jim Chin</p>
                </div>
                
            </VerticalTimelineElement>

            <VerticalTimelineElement
                className='timline-card'
                contentStyle={{backgroundColor:'transparent',color:"#555555"}}
                contentArrowStyle={{border:'none'}}
                date="Dec 06 2021 11:38AM"
                iconStyle={{background:"#3AB748",color:"#ffffff"}}
                icon={<BsCheck2/>}
            >
                <h3>Request Bed Conformation</h3>
                <div className='alignment-name'>
                    <i class="fa-solid fa-user-doctor"></i>
                    <p className='para-doctor'>Jim Chin AP</p>
                </div>
                
            </VerticalTimelineElement>

            <VerticalTimelineElement
                className='timline-card'
                contentStyle={{backgroundColor:'transparent',color:"#555555"}}
                contentArrowStyle={{border:'none'}}
                iconStyle={{background:"#ffffff",color:"#888888"}}
                icon={<GiBed/>}
            >
                <h3>Admitted</h3>
                
                
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className='timline-card'
                contentStyle={{backgroundColor:'transparent',color:"#555555"}}
                contentArrowStyle={{border:'none'}}
                iconStyle={{background:"#ffffff",color:"#888888"}}
                icon={<FaBed/>}
            >
                <h3>Accepted</h3>
                
                
            </VerticalTimelineElement>
            


        </VerticalTimeline>

    </div>
)

export default Timeline