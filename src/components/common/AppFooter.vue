<template>
	<footer class="footer">
		<div class="container">
			<div class="footer-link-wrap">
				<a
					class="footer-link"
					href="https://github.com/Jaehyeokk/vue-til-front"
					target="_blank"
					><i class="fas fa-code-branch"></i>Code</a
				>

				<a
					class="footer-link"
					href="https://github.com/Jaehyeokk"
					target="_blank"
					><i class="fab fa-github"></i>GitHub</a
				>
			</div>
		</div>
	</footer>
</template>

<script>
export default {};
</script>

<style scoped>
.footer {
	display: flex;
	justify-content: center;
	align-items: center;
	height: 60px;
	padding: 0 20px;
	margin-top: 60px;
	background-color: mediumpurple;
	color: #f5f5f5;
	box-shadow: -0px -3px 3px rgba(0, 0, 0, 0.1);
}

.footer-link-wrap {
	display: flex;
	justify-content: center;
	align-items: center;
}

.footer-link {
	padding: 0 12px;
	font-size: 16px;
	color: #fff;
	transition: all 0.1s ease;
}

.footer-link:hover {
	color: rgb(228, 214, 255);
}

.footer-link i {
	margin-right: 7px;
	font-size: 27px;
}
</style>
