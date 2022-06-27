<template>
<div class="page-heading">
    <div class="page-title">
        <div class="row">
            <div class="col-12 col-md-6 order-md-1 order-last">
                <h3>DataTable</h3>
                <p class="text-subtitle text-muted">A sortable, searchable, paginated table without dependencies thanks to simple-datatables</p>
            </div>
            <div class="col-12 col-md-6 order-md-2 order-first">
                <nav aria-label="breadcrumb" class="breadcrumb-header float-start float-lg-end">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="index.html">Dashboard</a></li>
                        <li class="breadcrumb-item active" aria-current="page">DataTable</li>
                    </ol>
                </nav>
            </div>
        </div>
    </div>
    <section class="section">
        <div class="card">
            <div class="card-header">
                Simple Datatable
            </div>
            <div class="card-body">
                <table class="table table-striped" id="table1">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>City</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(item, index) in itens" :key="index">
                            <td>{{item.name}}</td>
                            <td>{{item.email}}</td>
                            <td>{{item.phone}}</td>
                            <td>{{item.city}}</td>
                            <td>
                                <span class="badge bg-success">Active</span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

    </section>
</div>

</template>

<script>
export default {
    name: 'Datatable',
	data(){
		return{
			itens: [
				{
					name: 'Hamilton',
					email: 'mauris@diam.org',
                    phone: '0800 256 8788',
					city: 'Sanzeno'
				},
				{
					name: 'Darius',
					email: 'velit@nec.com',
                    phone: '0309 690 7871',
					city: 'Ways'
				}
			]
		}
	}
}
</script>

<style>

</style>