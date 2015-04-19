open-hackathon-adminUI Cookbook
===============================

This cookbook auto-deploys open-hackathon-adminUI.

Requirements
------------

#### packages
- `apt` - open-hackathon-adminUI needs apt.
- `python` - open-hackathon-adminUI needs python.
- `git` - open-hackathon-adminUI needs git.
- `uwsgi` - open-hackathon-adminUI needs uwsgi.
- `gcc` - open-hackathon-adminUI needs gcc.

Attributes
----------

#### open-hackathon-adminUI::default
<table>
  <tr>
    <th>Key</th>
    <th>Type</th>
    <th>Description</th>
    <th>Default</th>
  </tr>
  <tr>
    <td><tt>['open-hackathon-adminUI']['HOSTNAME']</tt></td>
    <td>String</td>
    <td>hostname of open-hackathon-adminUI</td>
    <td><tt>http://hack-admin-dev.chinacloudapp.cn</tt></td>
  </tr>
  <tr>
    <td><tt>['open-hackathon-adminUI']['root-dir']</tt></td>
    <td>String</td>
    <td>root directory of git repository</td>
    <td><tt>/opt/open-hackathon</tt></td>
  </tr>
</table>

Usage
-----
#### open-hackathon-adminUI::default

Just include `open-hackathon-adminUI` in your node's `run_list`:

```json
{
  "name":"my_node",
  "run_list": [
    "recipe[open-hackathon-adminUI]"
  ]
}
```

Tips
------------

1.Use ssh protocol to link to github and setup your ssh key-pair before.
2.Setup MySQL user, pwd, database and port.
3.Setup ruby-gem resource.

Contributing
------------


License and Authors
-------------------
