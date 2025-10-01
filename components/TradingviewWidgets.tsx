// TradingViewWidget.jsx
"use client"
import React, { useRef, memo } from 'react';
import useTradingviewWidget from '@/hooks/UseTradingviewWidget';
import { cn } from '@/lib/utils';
interface TradingViewWidgetProps{
    title: string,
    config: Record<string, unknown>,
    scriptUrl: string,
    height?: number,
    className?: string
}

function TradingViewWidget({title, config, scriptUrl, height=600, className}:TradingViewWidgetProps) {

  const container = useTradingviewWidget(scriptUrl, config, height);

  return (
    <div className="w-full">

        {title && <h3 className='font-semibold text-2xl text-gray-100 mb-5'>{title}</h3>}

        <div 
        className={cn("tradingview-widget-container", className)} 
        ref={container} 
        >

          <div className="tradingview-widget-container__widget" style={{ height: height, width: "100%" }}/>
        
        </div>
    </div>
    
  );
}

export default memo(TradingViewWidget);
