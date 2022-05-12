const express = require('express')

// const NSAPI = require('ns-api')
// const ns = new NSAPI({
//   key: 'ca4f19324439405683dad05a26f4df3b'
// })

const router = express.Router()

const today = new Date()
const year = today.getFullYear()
const month = (today.getMonth() + 1)
const date = today.getDate()
const time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds()

router
  .get('/', async (req, res) => {
    const homeTime = year + '-' + month + '-' + date + '-' + time
    const workTime = year + '-' + month + '-' + (date + 1) + '07:00:00'
    const home = 'Eindhoven%20Centraal'
    const work = 'Amsterdam%20Centraal'

    // const trip = await ns.getTrips({
    //   dateTime: homeTime,
    //   fromStation: 'Eindhoven',
    //   toStation: 'Amsterdam'
    // })
    // console.log(trip)
    res.render('index', {
      workTime,
      homeTime,
      home,
      work
    })
  })

// ASD
// EHV
module.exports = router
