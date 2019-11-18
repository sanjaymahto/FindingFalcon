import * as React from 'react'
import { Select } from 'antd'

interface PlanetProps {
  planets: Array<{ name: string; distance: number }>
  disabled: boolean
  value?: string
  onOptionChange?: any
  OnSearchChange?: any
  loading: boolean
}

const { Option } = Select

const planetOptions = (planets: Array<{ name: string; distance: number }>) => {
  return planets.map(
    (planet: { name: string; distance: number }, index: number) => {
      return (
        <Option key={index} value={planet.name}>
          {planet.name}
        </Option>
      )
    }
  )
}

export const PlanetDropdown: React.SFC<PlanetProps> = props => {
  return (
    <Select
      showSearch
      loading={props.loading && !props.planets.length ? true : false}
      style={{ width: 200 }}
      placeholder="Select a planet"
      optionFilterProp="children"
      onChange={props.onOptionChange}
      onSearch={props.OnSearchChange}
      disabled={props.disabled}
      filterOption={(input: any, option: any) =>
        option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
      }
    >
      {planetOptions(props.planets)}
    </Select>
  )
}
