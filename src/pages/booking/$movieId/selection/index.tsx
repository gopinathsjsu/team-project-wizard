import React, { useState, useEffect } from 'react'
import BaseLayout from '../../../../Components/Layouts/BaseLayout'
import SeatMatrix from '../../../../Components/Booking';



function MovieDetail() {

  return (
    <BaseLayout>
      <SeatMatrix />
    </BaseLayout>
  )
}

export default MovieDetail;