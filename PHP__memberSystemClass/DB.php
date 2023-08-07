<?php
class DB
{
    private static $mysqli;

    public function __construct($host, $user, $pwd, $db)
    {
        mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
        DB::$mysqli = new mysqli($host, $user, $pwd, $db);
    }

    private static function getTypes($params)
    {
        $type = '';
        foreach ($params as $param) {
            switch (gettype($param)) {
                case 'string':
                    $type .= 's';
                    break;
                case 'integer':
                    $type .= 'i';
                    break;
                case 'double':
                    $type .= 'f';
                    break;
                case 'array':
                    $type .= 'b';
                    break;
            }
        }
        return $type;
    }

    private static function queryResult($sql, ?array $params = null)
    {
        $stmt = DB::$mysqli->prepare($sql);
        if ($params != null) {
            $types = DB::getTypes($params);
            $arr = [];
            for ($i = 0; $i < strlen($types); $i++) {
                if (substr($types, $i, 1) != 'b') {
                    $arr[] = $params[$i];
                } else {
                    $arr[] = $params[$i][0];
                }
            }
            $stmt->bind_param($types, ...$arr);
            for ($i = 0; $i < strlen($types); $i++) {
                if (substr($types, $i, 1) == 'b') {
                    $stmt->send_long_data($i, $arr[$i]);
                }
            }
        }
        $stmt->execute();
        $result = $stmt->get_result();
        $stmt->close();
        return $result;
    }

    private static function query($sql, ?array $params = null)
    {
        $stmt = DB::$mysqli->prepare($sql);
        if ($params != null) {
            $types = DB::getTypes($params);
            $arr = [];
            for ($i = 0; $i < strlen($types); $i++) {
                if (substr($types, $i, 1) != 'b') {
                    $arr[] = $params[$i];
                } else {
                    $arr[] = $params[$i][0];
                }
            }
            $stmt->bind_param($types, ...$arr);
            for ($i = 0; $i < strlen($types); $i++) {
                if (substr($types, $i, 1) == 'b') {
                    $stmt->send_long_data($i, $arr[$i]);
                }
            }
        }
        return $stmt->execute();
    }

    public static function select($sql, $completion, ?array $params = null)
    {
        $result = DB::queryResult($sql, $params);
        $rows = $result->fetch_all(MYSQLI_ASSOC);
        $completion($rows);
    }

    public static function insert($sql, ?array $params = null)
    {
        return DB::query($sql, $params);
    }

    public static function update($sql, ?array $params = null)
    {
        return DB::query($sql, $params);
    }

    public static function delete($sql, ?array $params = null)
    {
        return DB::query($sql, $params);
    }
}


$db = new DB('localhost', 'account', 'password', 'database');