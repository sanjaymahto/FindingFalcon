import * as React from 'react'
import { Radio } from 'antd'

const radioStyle = {
  display: 'block',
  height: '30px',
  lineHeight: '30px',
}

interface PlanetProps {
  vehicles: Array<{
    name: string
    total_no: number
    max_distance: number
    speed: number
  }>
  disabled: boolean
  value: string
  onOptionChange?: any
}

const vehicleOptions = (
  vehicles: Array<{
    name: string
    total_no: number
    max_distance: number
    speed: number
  }>
) => {
  return vehicles.map((vehicle, index) => {
    return (
      <Radio
        key={index}
        style={radioStyle}
        value={vehicle.name}
        disabled={vehicle.total_no ? false : true}
      >
        {`${vehicle.name}(${vehicle.total_no})`}
      </Radio>
    )
  })
}

export const VehicleRadioComp: React.SFC<PlanetProps> = props => {
  return (
    <Radio.Group
      value={props.value}
      onChange={props.onOptionChange}
      disabled={props.disabled}
    >
      {vehicleOptions(props.vehicles)}
    </Radio.Group>
  )
}
