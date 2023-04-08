import {Component} from 'react'

import Cookies from 'js-cookie'

import Header from '../Header'

import './index.css'

class ProductItemDetails extends Component {
  componentDidMount() {
    this.getItemDetails()
  }

  getItemDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = `http://localhost:3000/products/${id}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    console.log(response)
    if (response.ok === true) {
      const data = response.json()
      console.log(data)
    }
  }

  render() {
    return <Header />
  }
}
export default ProductItemDetails
