'use client';

import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import { useEffect, useState } from 'react'
import 'axios'
import axios from 'axios';
import DeviceCard from '../components/DeviceCard'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [Temp, setTemp] = useState([]);
  const [Weather, setWeather] = useState([]);
  const [devices, setDevices] = useState([]);

  useEffect(() => {
    axios.get('/api/hello').then((res) => {
      console.log(res.data)
      setTemp(res.data);
    })

  }, [])

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center", marginTop: "25px", marginBottom: "30px" }}>
        <span
          style={{
            fontFamily: "monospace",
            fontWeight: "bolder",
            fontSize: "30px",
            textAlign: "center",
            justifySelf: "center"
          }}>
          IOT - Data Dashboard
        </span>
      </div>
      <div style={{
        display: "flex",
        flexDirection: "row",
        justifyItems: "center",
        justifyContent: "space-evenly",
        marginTop: "15px",
        flexWrap: "wrap"
      }}>
        {
          Temp.map((item: any, index) => {
            return (
              <div>
                <DeviceCard current={item.current} image={item.image} name={item.name} temp={item.temperature} voltage={item.Voltage} values={item.Values} key={index} />
              </div>
            )
          })
        }
      </div>
    </div>
  )
}
