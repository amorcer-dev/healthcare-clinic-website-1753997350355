import React from 'react';
import { WidgetProfile } from '@/components/WidgetProfile'
import { WidgetVideo } from '@/components/WidgetVideo'
import { WidgetAboutDoctor } from '@/components/WidgetAboutDoctor'
import { WidgetServicesAndConditions } from '@/components/WidgetServicesAndConditions'
import { WidgetTestimonialCarousel } from '@/components/WidgetTestimonialCarousel'
import { WidgetPricesAndPackages } from '@/components/WidgetPricesAndPackages'
import { WidgetBookConsultation } from '@/components/WidgetBookConsultation'
import { WidgetInsurances } from '@/components/WidgetInsurances'
import { WidgetMessageDoctor } from '@/components/WidgetMessageDoctor'

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Profile Widget - Left Column */}
          <div className="md:col-span-1">
            {mainPageComponents.find(comp => comp.codePath.includes('WidgetProfile')) && 
              generateComponentUsage('WidgetProfile', 'doctor-profile-widget', businessData, customization)
            }
          </div>
          
          {/* Main Content - Right Columns */}
          <div className="md:col-span-2">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Column 1 */}
              <div className="space-y-6">
                {mainPageComponents
                  .filter(comp => !comp.codePath.includes('WidgetProfile'))
                  .slice(0, Math.ceil(mainPageComponents.length / 2))
                  .map(comp => {
                    const componentName = comp.codePath.replace('./', '').replace('.tsx', '');
                    const exportMap: Record<string, string> = {
                      'WidgetProfile': 'WidgetProfile',
                      'WidgetVideo': 'WidgetVideo',
                      'WidgetAboutDoctor': 'WidgetAboutDoctor',
                      'WidgetServicesAndConditions': 'WidgetServicesAndConditions',
                      'WidgetTestimonialCarousel': 'WidgetTestimonialCarousel',
                      'WidgetPricesAndPackages': 'WidgetPricesAndPackages',
                      'WidgetBookConsultation': 'WidgetBookConsultation',
                      'WidgetInsurances': 'WidgetInsurances',
                      'WidgetMessageDoctor': 'WidgetMessageDoctor'
                    };
                    const exportName = exportMap[componentName] || componentName;
                    const componentTypeMap: Record<string, string> = {
                      'WidgetProfile': 'doctor-profile-widget',
                      'WidgetVideo': 'video-widget',
                      'WidgetAboutDoctor': 'about-doctor-widget',
                      'WidgetServicesAndConditions': 'services-conditions-widget',
                      'WidgetTestimonialCarousel': 'testimonial-carousel-widget',
                      'WidgetPricesAndPackages': 'prices-and-packages-widget',
                      'WidgetBookConsultation': 'book-consultation-widget',
                      'WidgetInsurances': 'insurances-widget',
                      'WidgetMessageDoctor': 'message-doctor-widget'
                    };
                    const correctType = componentTypeMap[componentName] || comp.type;
                    return generateComponentUsage(exportName, correctType, businessData, customization);
                  })
                  .join('
')
                }
              </div>
              
              {/* Column 2 */}
              <div className="space-y-6">
                {mainPageComponents
                  .filter(comp => !comp.codePath.includes('WidgetProfile'))
                  .slice(Math.ceil(mainPageComponents.length / 2))
                  .map(comp => {
                    const componentName = comp.codePath.replace('./', '').replace('.tsx', '');
                    const exportMap: Record<string, string> = {
                      'WidgetProfile': 'WidgetProfile',
                      'WidgetVideo': 'WidgetVideo',
                      'WidgetAboutDoctor': 'WidgetAboutDoctor',
                      'WidgetServicesAndConditions': 'WidgetServicesAndConditions',
                      'WidgetTestimonialCarousel': 'WidgetTestimonialCarousel',
                      'WidgetPricesAndPackages': 'WidgetPricesAndPackages',
                      'WidgetBookConsultation': 'WidgetBookConsultation',
                      'WidgetInsurances': 'WidgetInsurances',
                      'WidgetMessageDoctor': 'WidgetMessageDoctor'
                    };
                    const exportName = exportMap[componentName] || componentName;
                    const componentTypeMap: Record<string, string> = {
                      'WidgetProfile': 'doctor-profile-widget',
                      'WidgetVideo': 'video-widget',
                      'WidgetAboutDoctor': 'about-doctor-widget',
                      'WidgetServicesAndConditions': 'services-conditions-widget',
                      'WidgetTestimonialCarousel': 'testimonial-carousel-widget',
                      'WidgetPricesAndPackages': 'prices-and-packages-widget',
                      'WidgetBookConsultation': 'book-consultation-widget',
                      'WidgetInsurances': 'insurances-widget',
                      'WidgetMessageDoctor': 'message-doctor-widget'
                    };
                    const correctType = componentTypeMap[componentName] || comp.type;
                    return generateComponentUsage(exportName, correctType, businessData, customization);
                  })
                  .join('
')
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}