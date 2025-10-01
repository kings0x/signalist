import { Button } from "@/components/ui/button"
import TradingviewWidgets from "@/components/TradingviewWidgets"
import { HEATMAP_WIDGET_CONFIG, MARKET_DATA_WIDGET_CONFIG, MARKET_OVERVIEW_WIDGET_CONFIG, TOP_STORIES_WIDGET_CONFIG } from "@/lib/constants"
const Home = () => {
  const baseScriptUrl = 'https://s3.tradingview.com/external-embedding/embed-widget-';
  return (
    <div className="flex min-h-screen home-wrapper w-full ">
      <section className="grid w-full gap-8 home-section">
        <div className="md:col-sapn-1 xl:col-span-1 w-full ">
          <TradingviewWidgets
          title='WatchList'
          scriptUrl={`${baseScriptUrl}market-overview.js`}
          config={MARKET_OVERVIEW_WIDGET_CONFIG}
          className="custom-chart"
          height={600}
          />
        </div>

        <div className="md:col-sapn-1 xl:col-span-2">
           <TradingviewWidgets
            title='Stock Heatmap'
            scriptUrl={`${baseScriptUrl}stock-heatmap.js`}
            config={HEATMAP_WIDGET_CONFIG}
            />
        </div>
      </section>

      <section className="grid w-full gap-8 home-section">
        <div className="h-full md:col-sapn-1 xl:col-span-1  ">
          <TradingviewWidgets
          title='Timeline'
          scriptUrl={`${baseScriptUrl}timeline.js`}
          config={TOP_STORIES_WIDGET_CONFIG}
          className="custom-chart"
          height={600}
          />
        </div>

        <div className="h-full md:col-sapn-1 xl:col-span-2">
           <TradingviewWidgets
            title='Stock Heatmap'
            scriptUrl={`${baseScriptUrl}market-quotes.js`}
            config={MARKET_DATA_WIDGET_CONFIG}
            />
        </div>
      </section>
    </div>
  )
}

export default Home