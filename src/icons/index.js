// import Vue from 'vue'
// import SvgIcon from '@/components/SvgIcon'// svg component

// register globally
// Vue.component('svg-icon', <div>icon</div>)

const req = require.context('./svg', false, /\.svg$/)
const requireAll = requireContext => requireContext.keys().map(requireContext)
requireAll(req)
