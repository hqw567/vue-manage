<template>
	<el-row class="home" :gutter="20">
		<el-col :span="8">
			<el-card shadow="hover" class>
				<div class="user">
					<img :src="userImg" />
					<div class="userinfo">
						<p class="name">admin</p>
						<p class="access">超级管理员</p>
					</div>
				</div>
				<div class="login-info">
					<p>上次登录时间：<span></span>2021-7-19</p>
					<p>上次登录地点：<span></span>长沙</p>
				</div>
			</el-card>
			<el-card style="margin-top: 20px; height: 460px">
				<el-table :data="tableData">
					<el-table-column
						v-for="(val, key) in tablelable"
						:key="key"
						:prop="key"
						:label="val"
					>
					</el-table-column>
				</el-table>
			</el-card>
		</el-col>
		<el-col :span="16">
			<div class="num">
				<el-card
					shadow="hover"
					v-for="(item, index) in countData"
					:key="index"
					:body-style="{ display: 'flex', padding: 0 }"
				>
					<i
						class="icon"
						:class="'el-icon-' + item.icon"
						:style="{ background: item.color }"
					></i>

					<div class="detail">
						<p class="num">￥{{ item.value }}</p>
						<p class="txt">￥{{ item.name }}</p>
					</div>
				</el-card>
			</div>
			<el-card style="height: 280px">
				<div ref="echarts" style="height: 280px"></div>
			</el-card>
			<div class="graph">
				<el-card style="height: 260px"></el-card>
				<el-card style="height: 260px"></el-card>
			</div>
		</el-col>
	</el-row>
</template>

<script>
	import { getData } from '../../api/data'
	import * as echarts from 'echarts'
	export default {
		name: 'My-Home',
		data() {
			return {
				userImg: require('../../assets/images/user.png'),
				tableData: [],
				tablelable: {
					name: '课程',
					todayBuy: '今日购买',
					monthBuy: '本月购买',
					totalBuy: '总购买',
				},
				countData: [
					{
						name: '今日支付订单',
						value: 1234,
						icon: 'success',
						color: '#2ec7c9',
					},
					{
						name: '今日收藏订单',
						value: 210,
						icon: 'star-on',
						color: '#ffb980',
					},
					{
						name: '今日未支付订单',
						value: 1234,
						icon: 's-goods',
						color: '#5ab1ef',
					},
					{
						name: '本月支付订单',
						value: 1234,
						icon: 'success',
						color: '#2ec7c9',
					},
					{
						name: '本月收藏订单',
						value: 210,
						icon: 'star-on',
						color: '#ffb980',
					},
					{
						name: '本月未支付订单',
						value: 1234,
						icon: 's-goods',
						color: '#5ab1ef',
					},
				],
			}
		},
		mounted() {
			getData().then((res) => {
				const { code, data } = res.data
				if (code === 20000) {
					this.tableData = data.tableData
					const order = data.orderData
					const xData = order.date

					const keyArray = Object.keys(order.data[0])
					const series = []
					keyArray.forEach((key) =>
						series.push({
							name: key,
							data: order.data.map((item) => item[key]),
							type: 'line',
						})
					)
					const option = {
						xAxis: {
							data: xData,
						},
						yAxis: {},
						legend: {
							data: keyArray,
						},
						tooltip: {},
						series,
						title: {
							text: 'ECharts 入门示例',
						},
					}
					const E = echarts.init(this.$refs.echarts)
					E.setOption(option)
				}
				console.log(res)
			})
		},
	}
</script>

<style></style>
