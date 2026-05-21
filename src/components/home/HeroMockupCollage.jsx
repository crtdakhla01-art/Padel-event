import { mockupItems } from '../../data/mockupItems'
import MockupCard from './MockupCard'

function HeroMockupCollage() {
  return (
    <div className="relative isolate h-[clamp(520px,62vw,700px)] overflow-hidden bg-[#f6f4ed] sm:h-[clamp(560px,58vw,760px)] lg:h-[720px]">
      <div className="pointer-events-none absolute left-0 top-8 h-40 w-40 rounded-full bg-[#d7dfbf]/50 blur-3xl" />
      <div className="pointer-events-none absolute right-0 bottom-8 h-44 w-44 rounded-full bg-[#8ba045]/18 blur-3xl" />

      <div className="grid h-full grid-cols-2 gap-3 sm:grid-cols-3 lg:hidden">
        {mockupItems.map((item, index) => {
          const mobileSpan = index === 0 ? 'col-span-2 h-[240px] sm:h-[280px]' : 'h-[160px] sm:h-[200px]'

          return <MockupCard key={item.id} priority={index === 0} className={`relative ${mobileSpan}`} {...item} />
        })}
      </div>

      <div className="relative hidden h-full lg:block">
        {mockupItems.map((item, index) => {
          const desktopLayout = {
            pageIntro: 'absolute left-[3%] top-[6%] h-[34%] w-[33%]',
            heroCenter: 'absolute left-[20%] top-[22%] h-[46%] w-[52%]',
            pageDestination: 'absolute right-[2%] top-[8%] h-[30%] w-[30%]',
            photoBottomLeft: 'absolute left-[0%] bottom-[4%] h-[30%] w-[36%]',
            photoBottomRight: 'absolute right-[7%] bottom-[7%] h-[24%] w-[24%]',
          }

          const className = desktopLayout[item.id] || ''

          return (
            <MockupCard
              key={item.id}
              priority={index === 0}
              className={className}
              zIndex={item.zIndex}
              {...item}
            />
          )
        })}
      </div>
    </div>
  )
}

export default HeroMockupCollage