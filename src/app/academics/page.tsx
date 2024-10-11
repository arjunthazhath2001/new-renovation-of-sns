import FeaturedPrograms from '@/components/FeaturedPrograms'
import Institutions from '@/components/Institutions'
import OurFacilities from '@/components/OurFacilities'
import OurFaculty from '@/components/OurFaculty'
import OurTech from '@/components/OurTech'
import { SparklesPreview } from '@/components/SparklesPreview'
import Spine from '@/components/Spine'
import React from 'react'

export default function AcademicsPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Section 1 */}
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 py-6 sm:py-8 md:py-3 lg:py-4">
        <div className="w-full text-center">       
          <SparklesPreview/>
        </div>
      </section>

      {/* Section 2 */}
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 py-6 sm:py-8 md:py-3 lg:py-4">
        <div className="w-full text-center">
          <FeaturedPrograms/>
        </div>
      </section>

      {/* Section 3 */}
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 py-6 sm:py-8 md:py-3 lg:py-4">
        <div className="w-full text-center">
          <Institutions/>
        </div>
      </section>

      {/* Section 4 */}
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 py-6 sm:py-8 md:py-3 lg:py-4">
        <div className="w-full text-center">
          <Spine/>
        </div>
      </section>

      {/* Section 5 */}
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 py-6 sm:py-8 md:py-3 lg:py-4">
        <div className="w-full text-center">
          <OurFacilities/>
        </div>
      </section>

      {/* Section 6 */}
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 py-6 sm:py-8 md:py-3 lg:py-4">
        <div className="w-full text-center">
          <OurTech/>
        </div>
      </section>

      {/* Section 7 */}
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 py-6 sm:py-8 md:py-3 lg:py-4">
        <div className="w-full text-center">
          <OurFaculty/>
        </div>
      </section>
    </div>
  )
}
