<template>
  <div id="app">
    <nav>
      <router-link to="/"><img src="./assets/images/logo.png" /></router-link>
      <router-link to="/" class="home">主页</router-link>
      <router-link to="/about">关于</router-link>
    </nav>
    <!-- <hr /> -->
    <!-- 中间的轮播图路由 -->
    <router-view />
    <footer class="footer">
      <div class="container">
        <p>
          Copyright&copy;北京飞奕豪科技有限公司 &nbsp;
          <a href="https://beian.miit.gov.cn/#/Integrated/index" class="beian"
            ><img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAMAAAC6V+0/AAACglBMVEUAAAD89dn+/ODz6KrcrGreqFfYrn3x16769M3oxnyaaVzhs2ifaFXbrGLkvFnpyF7v2X/kwm3cp1nhsGfqw3rntVzjrFPt3oDjvGnbnFGti3q0lH7ktoLryXn9v1T4znr/74bnvGz034v+2I/ktoDz6ZLkwY/Dfz7buoftzYbq2IPr0pjs3bLv6KPRrnbKhFv/+dDZr4Lx38f/+cH/95f42oL7/97s2Y3++uzTk3AAAXgCAWbmulrdmUXWHRcBAm7uzWbpwmLsxl3ktV3qvFr/0ljmwFHksE7fo0raSijXPSDWAgjPAAJrdoeUj4EAAICRiXb143Pyy27w1Gz+z2XtymH/217qyVy7jluTeFrrwFfislP+xVJRNlHpuFDpsErVkEbysETajkPpgj7ThT3ilDvXdTg5FDjdhTXtcTDWZTC7TCbuXiPTOCLJPR/TLhzJJxP9LA+0Bw/QFg2Ej5kcPpdyhZSptJEACJFpfo4AG44XMInFvYfTvIejmYRyeoJzdoK9un7FrnwAEHp8enny2HjWwHjKtnhcX3jYzHfu2HWsonPNwnH70m9WTm8AAW//723pym3dtmm0o2ZeWWb/4mPtwmJuYmL/vmB5ZGAMAF2njVn4xFjYnli0mVjiqVfyyVbmtlbXkVPlvFLNrFKjfVLuvlBgHlDsuU9ODk7/2E02Gk3jqkqEaUr/tUngjkf7n0b6xERCJETdn0K1gD/ooD3Ulj3TZT3WjjzOeDqBWDr3pDlMADnbbTf2gjbkbzaTYDZpAjbplzTEazPXXzOeXzDMPi38jizJWSrVSCrzfCjVdCjTQCbFUiTlYCPiRh7SIRrRDBG/ABHBDAvEGArJAAJrcyAdAAAAOnRSTlMAGghC4MasaVv7+/n39fTw7Ozr5+bk5OHg0tHLx8TDwb68urKxq5+cmJWTjIN8b11MSEFBNTApJyEUZZQtrgAAAW1JREFUGNNigAJGdmkpdkYGZGDMxnN019qlXGwGCDGmiPQDh89lTupOj2CCa5WPjTzlnevps6E8Vhkqasa9esrxC3b5nsWXZ/huEjEHC5oE+M/O8c63u5h7NafRPsAUrFnOz2rLeW87Ly87H6/O/hYFC6Cg3u46/3n7fE5sc1tfnNlj7+eqAxTUONRUMX1jdl5W2t6kqTOtahLVgIIsGUGl9tnJJ/OOnNm/3bq6NZUFKAgY7851ZVZFhVln05ILL1lXxqRIAAVVNofUVu0pulJQ4HnsYHN7b7QmUFAmaX5IiZW19crls6yt6sOc18gCBTnnLkoNaov0nbyko69h2lZbdwGgIMdij4TTc8JWxSS6TnDNSIgOZ2YAifK7pexwcHG3cQi2tZ0oCBZjMBIOd1oY5eQY6uJhE+woBBFUCuxydnZxd4yz9bCxcQhUhYSmFl/cgmXxK+KjnNxCxXVhAWqpr84qKSbKqqhtCOYDALPYc2hoS0J5AAAAAElFTkSuQmCC"
              style="width: 12px; padding-bottom: 3px; vertical-align: middle"
            /> 京ICP备2024052839号-1</a
          >&nbsp; 📧 暂无
        </p>
      </div>
    </footer>
    <!-- 返回顶部按钮 -->

  </div>
</template>

<style>
* {
  padding: 0;
  margin: 0;
}
.container {
  max-width: 900px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  position:  relative;

}

nav {
  position: fixed;
  display: flex;
  align-items: center;
  top: 0;
  /* left: 0; */
  width: 100%;
  background-color: #ffffff;
  padding: 15px 150px;
  height: 40px;
  border-bottom: 1px solid #d2d2d285;
  z-index: 999;
  box-shadow: 0 0 20px 0 #d9d9d9;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  margin-right: 50px;
  text-align: center;
}

nav a:first-child {
  margin-left: 100px;
}
nav a.router-link-exact-active {
  color: #2f82ff;
}
nav img {
  height: 40px;
  width: 40px;
}
.footer {
  /* position: absolute;
  bottom: 0; */
  width: 100%;
  background-color: #333;
  color: #fff;
  padding: 20px 0;
  text-align: center;
  user-select: none;
}
.beian {
  color: #fff;
  text-decoration: none;
}
.container {
  max-width: 1200px;
  margin: 0 auto;
}
.con-edge{
  padding: 0 40px
}
/* 返回顶部按钮 */
.scroll-to-top {
  position: fixed;
  bottom: 80px;
  right: 20px;
  text-align: center;
  background-color: #007bff;
  color: #fff;
  border: none;
  height: 30px;
  width: 30px;
  border-radius:50%;
  cursor: pointer;
  opacity: 0.5;
}

.scroll-to-top:hover {
  background-color: #0056b3;
}
</style>
