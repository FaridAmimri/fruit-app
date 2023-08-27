/** @format */

import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { MinusIcon, PlusIcon } from 'react-native-heroicons/solid'
import { themeColors } from '../theme'

export default function CartItem({ fruitItem }) {
  return (
    <View className='flex-row items-center space-x-5 mb-5'>
      <View className='ml-7'>
        <TouchableOpacity className='flex-row -mb-10 -ml-9 shadow-lg z-20'>
          <Image
            source={fruitItem.image}
            style={{
              height: 65,
              width: 65,
              shadowColor: fruitItem.shadow,
              shadowRadius: 15,
              shadowOffset: { width: 0, height: 20 },
              shadowOpacity: 0.4,
              overflow: 'visible'
            }}
          />
        </TouchableOpacity>

        <View
          style={{
            backgroundColor: fruitItem.color(0.4),
            height: 60,
            width: 60
          }}
          className='rounded-3xl'
        ></View>
      </View>

      <View className='flex-1 space-y-1'>
        <Text
          style={{
            color: themeColors.text
          }}
          className='text-base font-bold'
        >
          {fruitItem.name}
        </Text>
        <Text className='text-yellow-500 font-extrabold'>
          {fruitItem.price} €
        </Text>
      </View>

      <View className='flex-row items-center space-x-2'>
        <TouchableOpacity className='bg-gray-300 p-1 rounded-lg'>
          <MinusIcon size={15} color='white' />
        </TouchableOpacity>
        <Text>{fruitItem.qty}</Text>
        <TouchableOpacity className='bg-gray-300 p-1 rounded-lg'>
          <PlusIcon size={15} color='white' />
        </TouchableOpacity>
      </View>
    </View>
  )
}
