import React from 'react'
import { IconContext } from 'react-icons'
import { FaUserFriends } from 'react-icons/fa'
import { GoGraph } from 'react-icons/go'
import { AiFillPieChart } from 'react-icons/ai'
import { GiProgression } from 'react-icons/gi'
import { ImLocation2 } from 'react-icons/im'
import './Panel.css'
// import IconCard from '../../../components/cards/iconCard/IconCard'
import IconCard from '../../components/cards/iconCard/IconCard'
import ImageCard from '../../components/cards/imageCard/ImageCard'

// import ImageCard from '../../components/cards/imageCard/ImageCard'

// import Table from "../../components/Table/Table";

export default function Panels() {
  const imageCardData = [
    {
      id: 1,
      imageSrc: 'https://admin.ivatle.com/public/ui/img/card-1.jpg',
      title: 'Cozy 5 Stars Apartment',
      desc:
        'The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the main night life in Barcelona.',
      leftFotter: '$899/night',
      rightFooter: (
        <>
          <ImLocation2 /> Barcelona, Spain"
        </>
      ),
      textAlign: 'center',
    },
    {
      id: 2,
      imageSrc: 'https://admin.ivatle.com/public/ui/img/card-2.jpg',
      title: 'Office Studio',
      desc:
        'The place is close to Metro Station and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the night life in London, UK.',
      leftFooter: '',
      rightFooter: (
        <>
          <ImLocation2 /> London, UK"
        </>
      ),
      textAlign: 'center',
    },
  ]

  return (
    <>
      <div style={{ backgroundColor: '#eeeeee', padding: '1rem ' }}>
        <div className='row' style={{ marginTop: 100 }}>
          {imageCardData.map((d, i) => {
            return (
              <>
                <ImageCard
                  imageSrc={d.imageSrc}
                  title={d.title}
                  desc={d.desc}
                  leftFooter={d.leftFooter}
                  rightFooter={d.rightFooter}
                  textAlign={d.textAlign}
                />
              </>
            )
          })}
        </div>
      </div>
    </>
  )
}
