angular.
	module('taskDetail').
	component('taskDetail', {
		templateUrl: 'task-detail/task-detail.template.html',
		controller: ['Tasks', '$routeParams', function taskDetailController(Tasks, $routeParams) {

			this.taskId = $routeParams.taskId;

			this.task = Tasks.getTasks({id: $routeParams.taskId})[0];

			this.tasktype = (this.task.done) ? 'panel-success' : 'panel-primary';

			this.isEdit = false;

			var that = this;

			this.descSave = function () {
				Tasks.getTasks({id: $routeParams.taskId})[0].desc = that.task.desc;
				that.isEdit = false;
			}

		}]
	});