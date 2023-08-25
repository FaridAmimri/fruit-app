/** @format */

import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { View, TouchableOpacity, Text, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import {
  Bars3CenterLeftIcon,
  ShoppingCartIcon
} from 'react-native-heroicons/solid'
import { themeColors } from '../theme'
import { categories, featuredFruits } from '../constants'
import { useState } from 'react'
import FruitCard from '../components/FruitCard'
import HotSalesCard from '../components/HotSalesCard'

export default function HomeScreen() {
  const [activeCategory, setActiveCategory] = useState('Bananas')

  return (
    <SafeAreaView className='flex-1 bg-orange-50'>
      <StatusBar style='dark' />

      {/* Top Bar */}
      <View className='flex-row mx-5 justify-between items-center'>
        <Bars3CenterLeftIcon size={30} color='black' />
        <TouchableOpacity className='p-2 rounded-xl bg-orange-100'>
          <ShoppingCartIcon size={25} color='orange' />
        </TouchableOpacity>
      </View>

      {/* Categories */}
      <View className='mt-4'>
        <Text
          style={{ color: themeColors.text }}
          className='text-2xl tracking-widest font-medium ml-5'
        >
          Seasonal
        </Text>
        <Text
          style={{ color: themeColors.text }}
          className='text-3xl font-semibold ml-5'
        >
          Fruits and Vegetables
        </Text>
        <ScrollView
          horizontal
          className='mt-8 px-5'
          showsHorizontalScrollIndicator={false}
        >
          {categories.map((category, index) => {
            let isActive = category == activeCategory
            let textClass = `text-xl ${isActive ? 'font-bold' : ''}`

            return (
              <TouchableOpacity
                key={index}
                className='mr-8 relative'
                onPress={() => setActiveCategory(category)}
              >
                <Text className={textClass}>{category}</Text>
                {isActive ? (
                  <Text className='font-extrabold text-orange-400 -mt-3 ml-2'>
                    __ _
                  </Text>
                ) : null}
              </TouchableOpacity>
            )
          })}
        </ScrollView>
      </View>

      {/* Fruits Carousel */}
      <View className='mt-8'>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {featuredFruits.map((fruit, index) => (
            <FruitCard fruitItem={fruit} key={index} />
          ))}
        </ScrollView>
      </View>

      {/* Hot Sales */}
      <View className='mt-8 pl-5 space-y-1'>
        <Text style={{ color: themeColors.text }} className='text-xl font-bold'>
          Hot Sales
        </Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{ overflow: 'visible' }}
        >
          {featuredFruits.reverse().map((fruit, index) => (
            <HotSalesCard fruit={fruit} key={index} />
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  )
}
