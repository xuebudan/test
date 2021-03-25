// 在一个空的文件夹里执行git init命令后会生成一个.git 的隐藏文件
// 空的文件夹会成为本地仓库

// 四种状态
// 未跟踪（untracked）：当前git还未管理它
// 未修改（unmodified):表示当前文件和仓库里面的文件内容一致
// 已修改（modified）：表示当前文件和仓库里面的文件内容不一致
// 已暂存（staged）：表示当前文件已经被存到当前的暂存区

// git status 可以查看当前文件所处的状态（红色文件名表示未跟踪）
// git status -s 以更精简的形式展示当前文件状态
// git add file（文件名称） 追踪文件
// git commit -m ‘todo’ 提交更新 一下提交所有文件 描述信息一定要写
// ctrl+c 错误还原

// 对文件的撤销操作  git checkout 文件名

// 取消暂存文件 git reset HEAD 文件名 ；git reset  HEAD .

// 跳过git add 直接提交修改的文件 git commit -a -m "描述信息" （相当于把git add/git commit合并）

// q（quit） 退出 

// git reset --hard commitID/提交id：可以回退到指定版本










