import React, { useState } from 'react'
import { assets } from '../assets/assets'

const InputField = ({ type, placeholder, name, handleChange, address, ...rest }) => (
    <input
        className='w-full px-2 py-2.5 border border-gray-500/30 rounded outline-none text-gray-500 focus:border-primary transition'
        type={type}
        placeholder={placeholder}
        onChange={handleChange}
        name={name}
        value={address[name]}
        required
        {...rest}
    />
)

const AddAddress = () => {
    const [address, setAddress] = useState({
        firstName: "",
        lastName: "",
        email: "",
        street: "",
        city: "",
        state: "",
        zipCode: "",
        country: "",
        phone: "",
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setAddress((prevAddress) => ({
            ...prevAddress,
            [name]: value,
        }))
        console.log(address)
    }

    const onSubmitHandler = async (e) => {
        e.preventDefault()
    }

    return (
        <div className='mt-16 pb-16'>
            <p className='text-2xl md:text-3xl text-gray-500'>Add Shipping
                <span className='font-semibold text-primary'> Address</span>
            </p>

            <div className='flex flex-col-reverse md:flex-row justify-between mt-10'>
                <div className='flex-1 max-w-md'>
                    <form onSubmit={onSubmitHandler} className='space-y-3 mt-6 text-sm'>

                        <div className='grid grid-cols-2 gap-4'>
                            <InputField handleChange={handleChange} address={address} id="firstName" name="firstName" type="text" placeholder="First Name" autoComplete="given-name" />
                            <InputField handleChange={handleChange} address={address} id="lastName" name="lastName" type="text" placeholder="Last Name" autoComplete="family-name" />
                        </div>

                        <InputField handleChange={handleChange} address={address} id="email" name="email" type="email" placeholder="Email Address" autoComplete="email" />
                        <InputField handleChange={handleChange} address={address} id="street" name="street" type="text" placeholder="Street" autoComplete="street-address" />

                        <div className='grid grid-cols-2 gap-4'>
                            <InputField handleChange={handleChange} address={address} id="city" name="city" type="text" placeholder="City" autoComplete="address-level2" />
                            <InputField handleChange={handleChange} address={address} id="state" name="state" type="text" placeholder="State" autoComplete="address-level1" />
                        </div>

                        <div className='grid grid-cols-2 gap-4'>
                            <InputField handleChange={handleChange} address={address} id="zipCode" name="zipCode" type="text" placeholder="Zip Code" autoComplete="postal-code" />
                            <InputField handleChange={handleChange} address={address} id="country" name="country" type="text" placeholder="Country" autoComplete="country" />
                        </div>

                        <InputField handleChange={handleChange} address={address} id="phone" name="phone" type="tel" placeholder="Phone Number" autoComplete="tel" />

                        <button type='submit' className='w-full mt-6 bg-primary text-white py-3 hover:bg-primary-dull transition cursor-pointer uppercase'>
                            Save Address
                        </button>

                    </form>
                </div>
                <img className='mb-16 md:mr-16 md:mt-0' src={assets.add_address_iamge} alt="add_address_iamge" role='presentation' />
            </div>
        </div>
    )
}

export default AddAddress