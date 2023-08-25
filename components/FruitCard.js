/** @format */

import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { HeartIcon } from 'react-native-heroicons/solid'
import { useState } from 'react'

export default function FruitCard({ fruitItem }) {
  const [isFavourite, setIsFavourite] = useState(false)

  return (
    <View
      style={{
        width: 270,
        borderRadius: 40,
        backgroundColor: fruitItem.color(1)
      }}
      className='mx-5'
    >
      <View className='flex-row justify-end'>
        <TouchableOpacity
          className='p-3 rounded-full mr-4 mt-4'
          style={{ backgroundColor: 'rgba(255,255,255,0.3)' }}
          onPress={() => setIsFavourite(!isFavourite)}
        >
          <HeartIcon
            size={25}
            color={isFavourite ? fruitItem.shadow : 'white'}
          />
        </TouchableOpacity>
      </View>

      <View
        className='flex-row justify-center'
        style={{
          shadowColor: fruitItem.shadow,
          shadowRadius: 40,
          shadowOffset: { width: 0, height: 50 },
          shadowOpacity: 0.6
        }}
      >
        <Image source={fruitItem.image} style={{ width: 210, height: 210 }} />
      </View>

      <View className='ml-4 my-4'>
        <Text className='font-bold text-xl text-white shadow'>
          {fruitItem.name}
        </Text>
        <Text className='font-bold text-white text-lg shadow tracking-wide'>
          {fruitItem.price} €
        </Text>
      </View>
    </View>
  )
}
