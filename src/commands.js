

const data = [{
    command: `<code>cd</code>, <code>cd ..</code>`,
    usage: `In order to change a directory, type <code>cd</code> followed by the directory or a path to the directory.
            <br/>
            If we want to move up a directory we use <code>cd ..</code> and if we want to move into a directory we specify the name of the directory we are moving into. For example, if you are in your home directory and type <code>cd Desktop</code>, you should move into your Desktop directory.

            <pre class="search-keywords">move up , change directory directories, move away from a folder</pre>`,
},
{
    command: `<code>cd Desktop</code> - relative to where I am currently
                 <br/>
               <code>cd /Users/eschoppik/Desktop</code> - absolute, starting from the root (first <code>/</code>, then <code>Users</code>, then <code>eschoppik</code>, then <code>Desktop</code>)`,
    usage: `When we specify a path starting from the root directory <code>/</code>, we call that an absolute path.`
}, {
    command: `<code>mkdir</code>`,
    usage: `<code>mkdir Newfolder</code> -> When you want to create a new empty folder called <code>Newfolder</code>`
},
{
    command: `<code>touch</code>`,
    usage: `<code>touch newfile</code> -> When you want to create a new empty file called <code>newfile</code>`
},
{
    command: `<code>pwd</code>`,
    usage: `<code>pwd</code> -> get the present working directory in your terminal
            <br/>
            you can see something like this
            <code>/home/Oluwatobi</code>`
},
{
    command: `<code>ls</code>`,
    usage: `<code>ls</code> -> list all files in the present directory`
}, {
    command: `<code>cat first_file</code>`,
    usage: `Displays content of a file, <code>cat first_file</code> displays all content in the <code>first_file</code> file`
},
{
    command: `<code>echo</code>`,
    usage: `<code>echo "Hello World" > first_file</code>
            <br/>
            This command writes <code>Hello World</code> into first_file`
},
{
    command: `<code> > </code>`,
    usage: `<code>echo "Hello World" > first_file</code>
            <br/>
            This command is called Redirect, It inserted <code>Hello World</code> into first_file`
}, {
    command: `<code> open </code>`,
    usage: `<code>open .</code> -> This command opens all files in the current working directory
            <br/>
            <code>code first_file</code> -> This command opens first_file in the current working directory
            <br/>
            NOTE:  If you are on Windows, the command to do this is <code>start NAME_OF_FILE</code>`
}, {
    command: `<code> mv </code>`,
    usage: `<code>mv test.txt first_folder/test.txt</code> -> This command moves <code>test.txt</code> to <code>first_folder</code>
            <br/>
            NOTE:  test.txt and first_folder must be present in your present working directory`
}, {
    command: `<code> cp </code>`,
    usage: `cp PATH_TO_ORIGINAL_FILE PATH_TO_COPIED_FILE
            <br/>
            <code>cp test.txt test_copy.txt</code> -> This command will copy <code>test.txt</code> and name it <code>test_copy.txt</code>
            <br/>
            <code>cp -r first_folder first_folder_copy</copy> -> To copy a folder`
}, {
    command: `<code> rm </code>`,
    usage: `For deleting a file
            <code>rm test.txt</code> -> This command deletes <code>test.txt</code>
            <br/>
            ⚠️ WARNING :  There is no confirmation or undo so be VERY careful when using the rm command.`
}, {
    command: `<code>rm -rf</code>`,
    usage: `For deleting a folder
            <code>rm -rf first_folder</code> -> This command will delete <code>first_folder</code>
            <br/>
            ⚠️ WARNING :  There is no confirmation or undo so be VERY careful when using the rm command.`
}, {
    command: `<code>whoami</code>`,
    usage: `For checking the current user`
}, {
    command: `<code>-l</code>`,
    usage: `<code>ls -l</code> flag -> To get more information about each files
             <br/>
            <code>ls -la</code> -> show all files and more detailed information about each one`
}, {
    command: `<code>chmod</code>`,
    usage: `for changing the permission of a file
            <br/>
            For each set of permissions (owner, group, everyone) we can assign a number from 0 to 7. This is called octal (base-8) notation.
            <br/>
            <code>chmod 777 test.txt</code>
            <br/>
            4 - read
            <br/>
            2 - write
            <br/>
            1 - execute
            <br/>
            therefore ∴ 7 = 4(read) + 2(write) + 1(execute)`
}, {
    command: `file permission details <code>---</code>`,
    usage: `<code>---</code> - 0 - (permission) none
            <br/>
            <code>-user(rw-)group(r--)other(---) 1 eschoppik staff 4.9M Jun 27 20:49 .babel.json</code>
            <br/>
            the above example shows that no permission has been given to <code>other</code>`
}, {
    command: `file permission details <code>-w-</code>`,
    usage: `<code>-w-</code> - 2 - (permission) write only
            <br/>
            <code>-user(rw-)group(r--)other(-w-) 1 eschoppik staff 4.9M Jun 27 20:49 .babel.json</code>
            <br/>
            the above example shows that <code>other</code> can only write`
}, {
    command: `file permission details <code>r--</code>`,
    usage: `<code>r--</code> - 4 - (permission) read only
            <br/>
            <code>-user(rw-)group(r--)other(-w-) 1 eschoppik staff 4.9M Jun 27 20:49 .babel.json</code>
            <br/>
            the above example shows that <code>group</code> can only read`
}, {
    command: `file permission details <code>r-x</code>`,
    usage: `<code>r-x</code> - 5 - (permission) read and execute
            <br/>
            <code>-user(rw-)group(r-x)other(-w-) 1 eschoppik staff 4.9M Jun 27 20:49 .babel.json</code>
            <br/>
            the above example shows that <code>group</code> can only read and execute`
}, {
    command: `file permission details <code>rw-</code>`,
    usage: `<code>rw-</code> - 6 - (permission) read and write
            <br/>
            <code>-user(rw-)group(r-x)other(-w-) 1 eschoppik staff 4.9M Jun 27 20:49 .babel.json</code>
            <br/>
            the above example shows that <code>user</code> can only read and write`
}, {
    command: `file permission details <code>rwx</code>`,
    usage: `<code>rwx</code> - 7 - (permission) read , write and execute
            <br/>
            <code>-user(rwx)group(r-x)other(-w-) 1 eschoppik staff 4.9M Jun 27 20:49 babel.sh</code>
            <br/>
            the above example shows that <code>user</code> can only read, write and execute`
}, {
    command: `<code>chomd -R</code>`,
    usage: `<code>chmod -R 755 some_folder</code>
            <br/>
            The command changes the permission of the folder to user(can read - 7) group(can read and execute - 5) other(can read and execute - 5)`
}, {
    command: `<code>chown</code>`,
    usage: `<code>chown anotheruser:anothergroup .bashrc</code>
            <br/>
            The command changes the owner and the group who owns the file`
}, {
    command: `<code>chgrp</code>`,
    usage: `<code>chgrp anothergroup .bashrc</code>
            <br/>
            The command changes the group that owns the file`
}, {
    command: `<code>root</code>`,
    usage: `The root user is a special user on your computer that has the power to do anything it wants. It can change permissions on any file, delete anything it wants, etc. When you see <code>root</code> as the owner, and you want to make a change to that file, you have to use a command called <code>sudo</code>.`
}, {
    command: `<code>sudo</code>`,
    usage: `
    <code>sudo chown root somefile.txt</code>
    <br/>
    The <code>sudo</code> command gives you the powers of the <code>root</code> user for just one command and will ask you for your password in order to preform the command.`
},

// add more here
]

export default data;