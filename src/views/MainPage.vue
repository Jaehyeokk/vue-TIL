<template>
	<div class="main-page">
		<div class="container">
			<ul class="post-list">
				<li class="post-item">
					<h3 class="post-title">title</h3>
					<p class="post-contents">contents</p>
					<div class="post-btns">
						<button class="edit-btn">Edit</button>
						<button class="remove-btn">Remove</button>
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
export default {};
</script>

<style scoped>
.main-page {
	min-height: calc(100vh - 240px);
}

.container {
	padding: 0 20px;
}

.post-list {
	display: flex;
	flex-wrap: wrap;
}

.post-item {
	overflow-y: auto;
	position: relative;
	width: 320px;
	height: 320px;
	padding: 20px 20px 40px;
	border-radius: 10px;
	background-color: #fff;
	box-sizing: border-box;
}

.post-title {
	font-weight: 700;
	font-size: 24px;
}

.post-contents {
	margin-top: 20px;
	font-size: 18px;
	line-height: 1.5;
}

.post-item .post-btns {
	display: flex;
	justify-content: flex-end;
	align-items: center;
	position: absolute;
	left: 0;
	bottom: 0;
	width: 100%;
	height: 40px;
	padding: 0 20px;
	box-sizing: border-box;
}

.post-item .post-btns button {
	border: none;
	outline: none;
	padding: 5px 15px;
	border-radius: 4px;
	background-color: #093687;
	color: #fff;
	cursor: pointer;
}

.post-item .post-btns .edit-btn {
	margin-right: 5px;
}
</style>
