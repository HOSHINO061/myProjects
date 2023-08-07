<?php
class Member
{
    private $status = false;

    public function __construct($db, $table)
    {
        $this->db = $db;
        $this->table = $table;
    }

    public function login(array $idCol_pwdCol, array $id_pwd, $complete)
    {
        $this->db->select("select * from $this->table where BINARY {$idCol_pwdCol[0]} = ? and BINARY {$idCol_pwdCol[1]} =?", function ($rows) {
            $this->status = ($rows != null);
            $this->rows = $rows;
        }, [$id_pwd[0], $id_pwd[1]]);
        $complete($this->status);
    }

    public function update(array $cols, array $values, array $idCol_id)
    {
        $updateCol = implode(' = ?, ', $cols) . " = ?";
        $values[] = $idCol_id[1];
        return $this->db->update("update $this->table set $updateCol where {$idCol_id[0]} = ?", $values);
    }

    public function signUp(array $cols, array $values)
    {
        $signupCol = implode(', ', $cols);
        $signupColCount = '?';
        for ($i = 0; $i < count($cols) - 1; $i++) {
            $signupColCount .= ", ?";
        }
        return $this->db->insert("insert into $this->table($signupCol) values($signupColCount)", $values);
    }
}

// $db is your database from DB.php
// table is a variable which means your table in $db.

$member = new Member($db, 'table');