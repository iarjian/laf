export default {
  "admins": {
    "read": "$has('admin.read')",
    "update": "$has('admin.edit')",
    "add": "$has('admin.create')",
    "remove": "$has('admin.delete')"
  },
  "permissions": {
    "read": "$has('permission.read')",
    "update": "$has('permission.edit')",
    "add": "$has('permission.create')",
    "remove": {
      "condition": "$has('permission.delete')",
      "query": {
        "name": {
          "required": true,
          "notExists": "/roles/permissions"
        }
      }
    },
    "count": "$has('permission.read')"
  },
  "roles": {
    "read": "$has('role.read')",
    "update": "$has('role.edit')",
    "add": "$has('role.create')",
    "remove": {
      "condition": "$has('role.delete')",
      "query": {
        "name": {
          "required": true,
          "notExists": "/admins/roles"
        }
      }
    }
  },
  "rules": {
    "read": "$has('rule.read')",
    "update": "$has('rule.edit')",
    "add": "$has('rule.create')",
    "remove": "$has('rule.delete')"
  },
  "functions": {
    "read": "$has('function.read')",
    "update": "$has('function.edit')",
    "add": "$has('function.create')",
    "remove": {
      "condition": "$has('function.delete')",
      "query": {
        "_id": {
          "notExists": "/triggers/func_id"
        },
        "status": {
          "required": true,
          "default": 0,
          "in": [
            0
          ]
        }
      }
    },
    "count": "$has('function.read')"
  },
  "function_logs": {
    "read": "$has('function_logs.read')",
    "remove": "$has('function_logs.remove')",
    "count": "$has('function_logs.read')"
  },
  "function_history": {
    "read": "$has('function_history.read')",
    "add": "$has('function_history.create')",
    "count": "$has('function_history.read')"
  },
  "triggers": {
    "read": "$has('trigger.read')",
    "update": "$has('trigger.edit')",
    "add": "$has('trigger.create')",
    "remove": "$has('trigger.delete') && query.status === 0",
    "count": "$has('trigger.read')"
  }
}