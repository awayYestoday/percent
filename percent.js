window.onload = function(){
  console.log()
  let width = 400
  let height = 10
  let rectwidth = 16
  let percent = 0.2
  let basepadding = 3 //  基础padding
  let rectNum = Math.floor((width + basepadding) / (rectwidth + basepadding)) //  根据宽度得出长方形总个数
  let lightRectNum = Math.ceil(percent * rectNum)  //  根据百分比得出需要点亮长方形个数
  let padding = (width - (rectNum * rectwidth + (rectNum - 1) * basepadding)) / (rectNum - 1)
  let arr = []
  for (let i = 0; i < rectNum; i++) {
    let obj = {}
    if (i < lightRectNum) {
      obj.light = true
    } else {
      obj.light = false
    }
    arr.push(obj)
  }
  console.log(arr)
  let rectstep = rectwidth + basepadding + padding
  d3.select('.percentShow svg').remove()
  let svg = d3.select('.percentShow').append('svg')
                  .attr('height', height)
                  .attr('width', width)
  svg.selectAll('rect')
          .data(arr)
          .enter()
          .append('rect')
          .attr('fill', '#1A3968')
          .attr('class', function (d, i) {
            if (d.light) {
              return 'light'
            }
          })
          .attr('width', rectwidth)
          .attr('height', 6)
          .attr('x', function (d, i) {
            return rectstep * i
          })
  svg.selectAll('rect.light')
        .transition()
        .delay(function (d, i) {
          return 40 * i
        })
        .duration(200)
        .attr('fill', '#5FE1FB')
}
