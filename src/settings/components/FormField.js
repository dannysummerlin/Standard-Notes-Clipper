import { h } from 'preact'

export default (props) => {
  return h('div', { className: 'form-group' },
    h('label', { for: props.name }, props.label),
    h('input', { onChange: (event) => props.onChange(event), required: props.required, name: props.name, id: props.name, type: props.type, placeholder: props.placeholder, className: 'form-control', value: props.value }, props.for)
  )
}
