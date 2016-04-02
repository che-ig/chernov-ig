<chart>
id=131005146928932329
symbol=EURUSD.m
period_type=1
period_size=1
digits=5
tick_size=0.000000
position_time=1437004800
scale_fix=0
scale_fixed_min=1.106000
scale_fixed_max=1.138800
scale_fix11=0
scale_bar=0
scale_bar_val=1.000000
scale=8
mode=1
fore=0
grid=0
volume=0
scroll=1
shift=1
shift_size=20.051914
fixed_pos=0.000000
ohlc=0
one_click=0
one_click_btn=1
bidline=1
askline=0
lastline=0
days=0
descriptions=0
tradelines=1
window_left=25
window_top=25
window_right=1188
window_bottom=429
window_type=3
background_color=13882323
foreground_color=0
barup_color=0
bardown_color=0
bullcandle_color=65280
bearcandle_color=255
chartline_color=0
volumes_color=3329330
grid_color=10061943
bidline_color=10061943
askline_color=255
lastline_color=49152
stops_color=255
windows_total=3

<window>
height=100.000000
objects=0

<indicator>
name=Main
path=
apply=1
show_data=1
scale_inherit=0
scale_line=0
scale_line_percent=50
scale_line_value=0.000000
scale_fix_min=0
scale_fix_min_val=0.000000
scale_fix_max=0
scale_fix_max_val=0.000000
expertmode=0
fixed_height=-1
</indicator>

<indicator>
name=Custom Indicator
path=Indicators\Examples\Professional Price Channel.ex5
apply=0
show_data=1
scale_inherit=0
scale_line=0
scale_line_percent=50
scale_line_value=0.000000
scale_fix_min=0
scale_fix_min_val=0.000000
scale_fix_max=0
scale_fix_max_val=0.000000
expertmode=0
fixed_height=-1

<graph>
name=UPPER
draw=1
style=0
width=2
color=16711680
</graph>

<graph>
name=LOWER
draw=1
style=0
width=2
color=255
</graph>

<graph>
name=MIDDLE
draw=1
style=2
width=1
color=-1
</graph>

<graph>
name=LONG
draw=3
style=0
width=2
arrow=233
color=16711680
</graph>

<graph>
name=SHORT
draw=3
style=0
width=2
arrow=234
color=255
</graph>
<inputs>
CHANNEL_PERIOD=12
ATR_PERIOD=48
ATR_FACTOR=-2.00000000
VISUAL=0
FILTER=0
</inputs>
</indicator>

<indicator>
name=Custom Indicator
path=Indicators\Examples\Professional Trend Indicator.ex5
apply=0
show_data=1
scale_inherit=0
scale_line=0
scale_line_percent=50
scale_line_value=0.000000
scale_fix_min=0
scale_fix_min_val=0.000000
scale_fix_max=0
scale_fix_max_val=0.000000
expertmode=0
fixed_height=-1

<graph>
name=Trend Up
draw=1
style=0
width=3
color=16777215
</graph>

<graph>
name=Trend Down
draw=1
style=0
width=3
color=16777215
</graph>

<graph>
name=New Trend Up
draw=1
style=2
width=1
color=16776960
</graph>

<graph>
name=New Trend Down
draw=1
style=2
width=1
color=55295
</graph>

<graph>
name=Price Сlose
draw=3
style=0
width=1
arrow=159
color=65280
</graph>
<inputs>
TREND_MODE=1
ATR_TIMEFRAME=0
ATR_PERIOD=48
TREND_ATR_FACTOR=2.00000000
TREND_PERIOD=1
NEW_TREND_VISIBLE=false
VISIBLE_POINT_CLOSE=false
INFORM_=ПАРАМЕТРЫ ОПОВЕЩЕНИЯ
INFORM_MAIL=false
INFORM_TELE=false
INFORM_ALERT=false
INFORM_SOUND=true
</inputs>
</indicator>
</window>

<window>
height=50.000000
objects=0

<indicator>
name=Custom Indicator
path=Indicators\Examples\Professional Insider.ex5
apply=0
show_data=1
scale_inherit=0
scale_line=0
scale_line_percent=50
scale_line_value=0.000000
scale_fix_min=0
scale_fix_min_val=-1.903576
scale_fix_max=1
scale_fix_max_val=5.000000
expertmode=0
fixed_height=-1

<graph>
name=Insider
draw=2
style=0
width=3
color=255
</graph>
<inputs>
BBR_COUNT=300
BBR_SIGNAL=1
BBR_ZERO=false
</inputs>
</indicator>
</window>

<window>
height=50.000000
objects=0

<indicator>
name=Custom Indicator
path=Indicators\Examples\Professional Insider.ex5
apply=0
show_data=1
scale_inherit=0
scale_line=0
scale_line_percent=50
scale_line_value=0.000000
scale_fix_min=0
scale_fix_min_val=0.000000
scale_fix_max=1
scale_fix_max_val=5.000000
expertmode=0
fixed_height=-1

<graph>
name=Insider
draw=2
style=0
width=3
color=16711680
</graph>
<inputs>
BBR_COUNT=300
BBR_SIGNAL=0
BBR_ZERO=false
</inputs>
</indicator>
</window>
</chart>