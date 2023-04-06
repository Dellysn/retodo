import { Button, Text } from '@mantine/core'
import React from 'react'

const AboutPage = () => {
  return (
    <><header className="bg-purple-500 py-4">
          <h1 className="text-white text-3xl text-center">About Retodo</h1>
      </header>
      <main className="max-w-4xl mx-auto px-4 py-8 bg-[#ffffff1f]">
              <section className="mb-8">
                  <h2 className="text-2xl font-bold mb-2">Introduction</h2>
                  <Text className="text-gray-600 ">Welcome to Retodo, the day-to-day activity management app designed to help you stay organized, focused, and motivated. My name is [Your Name], and I am the creator of this app.</Text>
              </section>

              <section className="mb-8">
                  <h2 className="text-2xl font-bold mb-2">Features</h2>
                  <ul className="list-disc list-inside">
                      <li className="text-gray-600 ">Customizable to-do lists</li>
                      <li className="text-gray-600 ">Habit tracking</li>
                      <li className="text-gray-600 ">Goal setting</li>
                  </ul>
                  <Text className="text-gray-600 ">Retodo makes it easy to stay on track and achieve your goals.</Text>
              </section>

              <section className="mb-8">
                  <h2 className="text-2xl font-bold mb-2">Benefits</h2>
                  <Text className="text-gray-600 ">Retodo isn't just about productivity – it's also about self-improvement. By tracking your habits and goals, you'll gain insight into your own behavior and start to identify patterns and areas for improvement.</Text>
              </section>

              <section>
                  <h2 className="text-2xl font-bold mb-2">Call to Action</h2>
                  <Text className="text-gray-600  mb-4">Why not give Retodo a try? Starting using the app today and start taking control of your schedule and your life. With Retodo, you'll never miss a deadline or forget an important task again.</Text>
                  <Button component="a" href="/profile/auth">Get Started</Button>
              </section>
          </main></>
  
  )
}

export default AboutPage