<template>
  <div class="home">
		<Row :gutter="12" class-name="margin-b-2">
			<Col :lg="8" :md="8" :xs="24">
				<Row>
					<Col class-name='margin-b-1 home-user'>
						<Card>
							<div slot="title" class='clear-float home-user-base'>
								<div class="left home-user-base-img"><img src="https://i.loli.net/2018/05/12/5af662c33a177.jpg" alt=""></div>
								<div class="left home-user-base-info">
									<dl>
										<dt>蒙奇·D·路飞</dt>
										<dd>未来の海贼王&nbsp;😁</dd>
									</dl>
								</div>
							</div>
							<div class="home-user-desc">
								<p>蒙奇·D·路飞，日本漫画《航海王》的主角，草帽海贼团、草帽大船团船长，极恶的世代之一。橡胶果实能力者，截止到2018-05-12悬赏金15亿贝里。梦想是找到传说中的One Piece，成为海贼王。</p>
							</div>
						</Card>
					</Col>
					<Col >
						<Card>
							<p slot="title">
								<Icon type="star"></Icon>
								消息
							</p>
							<ul class='home-from-info'>
								<li v-for="(item, index) in fromInfoList" :key="'info-'+index">
									<Row :gutter="16">
										<Col span="4">
											<Avatar style="background-color: #87d068" icon="person" :src="item.src"></Avatar>
										</Col>
										<Col span="20">
											<dl>
												<dt>{{item.name}}</dt>
												<dd>{{item.info}}</dd>
											</dl>
										</Col>
									</Row>
								</li>
							</ul>
						</Card>
					</Col>
				</Row>
			</Col>
			<Col :lg="16" :md="16" :xs="24">
				<Row>
					<Col class-name="home-reward">
						<Row :gutter="12">
							<Col span="8" v-for="(item, index) in rewards" class-name="margin-b-1" :key="'reward-'+index">
								<Card>
									<div class="clear-float home-reward-box">
										<div class="left">
											<Poptip trigger="hover" :title="item.sets + '话'" :content="item.info">
												<div class="home-reward-img"><img :src="item.src" alt=""></div>
											</Poptip>
										</div>										
										<div class="left home-reward-num">
											<NumCountup :number="item.reward"></NumCountup>&nbsp;$
										</div>
									</div>									
								</Card>
							</Col>
						</Row>
					</Col>
					<Col>
						<Card>
							<p slot="title">
								<Icon type="flag"></Icon>&nbsp;伙伴及大事件
							</p>
							<div class="chart-box"></div>
						</Card>
					</Col>
				</Row>
			</Col>
		</Row>
    <div>
      <Card>
        <p slot="title">
          🔥&nbsp;海贼篇章燃力值
        </p>
        <div class="chart-box">
          <VRecharts :options="chaptesOption"></VRecharts>
        </div>        
      </Card>
    </div>
  </div>
</template>

<script>
import {Row, Col, Card, Icon, Avatar, Poptip } from "iview";
import {VRecharts} from 'components';
import NumCountup from '@/pages/main-components/num-countup/';
import {FROM_INFO, REWARDS, ONEPIECE_CHAPTERS} from '@/mock/home';
import {chaptesChart} from './chart';

export default {
  name: "Home",
  components: {
    Row, Col, Card, Icon, Avatar, NumCountup, Poptip, VRecharts
  },
  data() {
    return {
      fromInfoList: FROM_INFO,
      rewards: REWARDS,
      chaptesOption: {}
    };
  },
  mounted() {
    this.renderChaptes();
  },
  methods: {
    renderChaptes () {
      const chaptesOption = chaptesChart(ONEPIECE_CHAPTERS);
      this.chaptesOption = {...chaptesOption};
    }
  }
};
</script>

<style lang="less" scoped>
@import "~utils/style/variables.less";
.home {
	.home-user {
		.home-user-base {
			> div {
				margin-right: 32px;
			}
			.home-user-base-img {
				width: 100px;
				height: 100px;
				border-radius: 50%;
				overflow: hidden;
				border: 3px solid @flv-default-color;
				img {
					width: 100%;
					height: 100%;
					vertical-align: middle;
				}
			}
			.home-user-base-info {
				padding: 8px;
				dt {
					font-family: cursive;
					font-size: 2em;
					color: @flv-default-color;
				}
				dd {
					margin-top: 24px;
					font-size: 1.2em;
				}
			}
		}
		.home-user-desc {
			p {
				line-height: 1.5;
				text-align: justify;
				text-indent: 2em;
				color: #999;
			}
		}
	}
	.home-from-info {
		li {
			padding: 8px;
			border-bottom: 1px solid #efefef;
		}
	}
	.home-reward {
		.home-reward-box {
			height: 80px;
		}
		.home-reward-img {
			width: 80px;
			height: 80px;
			margin-right: 16px;
			border-radius: 8px;
			overflow: hidden;
			border: 2px solid @flv-warn-color;
			img {
				width: 100%;
				height: 100%;
				vertical-align: middle;
			}
		}
		.home-reward-num {
			font-size: 16px;
			font-weight: 600;
			line-height: 80px;
		}
	}
}
</style>

