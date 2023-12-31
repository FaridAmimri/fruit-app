/** @format */

import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ChevronLeftIcon } from 'react-native-heroicons/solid'
import { MinusIcon, PlusIcon } from 'react-native-heroicons/solid'
import { useNavigation } from '@react-navigation/native'
import { themeColors } from '../theme'
import StarRating from 'react-native-star-rating'
import { useDispatch } from 'react-redux'
import { addToCart } from '../redux/cartSlice'

export default function ProductScreen(props) {
  let fruit = props.route.params
  const navigation = useNavigation()
  const dispatch = useDispatch()

  const [product, setProduct] = useState(fruit)
  const [quantity, setQuantity] = useState(1)

  const handleQuantity = (type) => {
    if (type === 'dec') {
      quantity > 1 && setQuantity(quantity - 1)
    } else {
      setQuantity(quantity + 1)
    }
  }

  const handleCart = () => {
    dispatch(
      addToCart({
        ...product,
        quantity: quantity
      })
    )
    navigation.navigate('Cart')
  }

  return (
    <View className='flex-1' style={{ backgroundColor: fruit.color }}>
      {/* Top */}
      <SafeAreaView>
        <View className='flex-row justify-start mx-5'>
          <TouchableOpacity
            style={{ backgroundColor: 'rgba(255,255,255,0.2)' }}
            className='border border-gray-50 rounded-xl'
            onPress={() => navigation.goBack()}
          >
            <ChevronLeftIcon size={30} color='white' />
          </TouchableOpacity>
        </View>
        <View
          className='flex-row justify-center mt-5 pb-10'
          style={{
            shadowColor: fruit.shadow,
            shadowRadius: 50,
            shadowOffset: { width: 0, height: 50 },
            shadowOpacity: 0.7
          }}
        >
          <Image source={fruit.image} style={{ width: 290, height: 290 }} />
        </View>
      </SafeAreaView>

      {/* Bottom */}
      <View
        style={{ borderTopLeftRadius: 45, borderTopRightRadius: 45 }}
        className='flex-1 bg-orange-50 px-6 space-y-2 '
      >
        {/* Name */}
        <Text
          style={{ color: themeColors.text }}
          className='mt-8 text-2xl font-bold'
        >
          {fruit.name}
        </Text>

        {/* Quantity Sold */}
        <View className='flex-row justify-between mb-3'>
          <Text className='text-gray-500 font-semibold'>{fruit.desc}</Text>
          <Text className='text-gray-500 font-semibold'>
            Sold <Text className='text-gray-800 font-extrabold'>239</Text>
          </Text>
        </View>

        {/* Star Rating */}
        <View className='flex-row justify-between'>
          <StarRating
            disabled={true}
            starSize={18}
            containerStyle={{ width: 120 }}
            maxStars={5}
            rating={fruit.stars}
            emptyStarColor='lightGray'
            fullStar={require('../assets/images/fullStar.png')}
          />
          <View className='flex-row items-center space-x-2'>
            <TouchableOpacity
              className='bg-gray-300 p-1 rounded-lg'
              onPress={() => handleQuantity('dec')}
            >
              <MinusIcon size={15} color='white' />
            </TouchableOpacity>
            <Text>{quantity}</Text>
            <TouchableOpacity
              className='bg-gray-300 p-1 rounded-lg'
              onPress={() => handleQuantity('inc')}
            >
              <PlusIcon size={15} color='white' />
            </TouchableOpacity>
          </View>
        </View>

        {/* Description */}
        <View>
          <Text
            style={{ color: themeColors.text }}
            className='tracking-wider py-3'
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Text>
        </View>

        {/* Price */}
        <View className='flex-row justify-between items-center'>
          <Text className='text-3xl'>{fruit.price} €</Text>
          <TouchableOpacity
            className='flex-1 ml-6 p-3 rounded-xl'
            style={{
              backgroundColor: fruit.shadow,
              opacity: 0.6,
              shadowColor: fruit.shadow,
              shadowRadius: 25,
              shadowOffset: { width: 0, height: 15 },
              shadowOpacity: 0.5
            }}
            onPress={() => handleCart()}
          >
            <Text className='text-xl text-center text-white font-bold'>
              Add To Cart
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}
