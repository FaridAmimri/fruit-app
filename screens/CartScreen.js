/** @format */

import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'
import { ChevronLeftIcon } from 'react-native-heroicons/solid'
import { themeColors } from '../theme'
import { cartItems } from '../constants'
import CartItem from '../components/CartItem'

export default function CartScreen() {
  const navigation = useNavigation()

  return (
    <SafeAreaView className='flex-1 bg-orange-50'>
      {/* Go Back Button */}
      <View className='flex-row justify-start mx-5'>
        <TouchableOpacity
          className='border border-gray-300 rounded-xl'
          onPress={() => navigation.goBack()}
        >
          <ChevronLeftIcon size={30} color='gray' />
        </TouchableOpacity>
      </View>

      {/* Cart Details */}
      <View className='flex-1 mx-5'>
        <Text style={{ color: themeColors.text }} className='text-2xl py-10'>
          Your <Text className='font-bold'>Cart</Text>
        </Text>
        <View>
          {cartItems.map((fruitItem, index) => (
            <CartItem key={index} fruitItem={fruitItem} />
          ))}
        </View>
      </View>

      {/* Cart Total */}
      <View className='flex-row justify-end py-6 pb-10 mx-5'>
        <Text className='text-lg'>
          Total price:{' '}
          <Text className='font-bold text-yellow-500'>16.80 €</Text>
        </Text>
      </View>

      {/* Payment Button */}
      <View className='flex-row justify-center mx-7'>
        <TouchableOpacity
          style={{
            backgroundColor: 'orange',
            opacity: 0.8,
            shadowColor: 'orange',
            shadowRadius: 25,
            shadowOffset: { width: 0, height: 15 },
            shadowOpacity: 0.4
          }}
          className='flex-1 p-3 rounded-xl'
        >
          <Text className='text-xl text-white text-center font-bold'>
            Payment
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}
