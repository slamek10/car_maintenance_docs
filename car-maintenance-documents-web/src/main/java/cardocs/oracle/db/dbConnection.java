package cardocs.oracle.db;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

public class dbConnection {

	static String url = "jdbc:mysql://192.168.0.62:3306/dev?autoReconnect=true&useSSL=false";
	static String dbUsername = "root";
	static String dbPassword = "75!VAN91slamek";

	
	public static boolean getLoginData(String username, String password) throws ClassNotFoundException, SQLException {

		boolean userExists = false;
		
			// load and register JDBC driver for MySQL
			Class.forName("com.mysql.jdbc.Driver");

			Connection connection = DriverManager.getConnection(url, dbUsername, dbPassword);
			
			String sql = "select * from dev.users where username = ? and password = ?";
					
			PreparedStatement ps = connection.prepareStatement(sql);
			
			ps.setString(1, username);
			ps.setString(2, password);
			
			ResultSet rs = ps.executeQuery();

			if (rs.next()) {

				userExists = true;
				
			} else {
				
				userExists = false;
				
			}
			
		return userExists;

	}
	
	public static boolean getDataForRegistration(String username, String password, String email) throws ClassNotFoundException, SQLException {
		
		Connection dbConnection = null;
		PreparedStatement ps = null;
		
		boolean userAdded = false;
		
		// load and register JDBC driver for MySQL
		Class.forName("com.mysql.jdbc.Driver");
					
		String insertSql = "INSERT INTO users"
				+ "(username, password, email) VALUES "
				+ "(?,?,?)";
		
		try {
			
			dbConnection = DriverManager.getConnection(url, dbUsername, dbPassword);			
			ps = dbConnection.prepareStatement(insertSql);
			
			ps.setString(1, username);
			ps.setString(2, password);
			ps.setString(3, email);
			
			ps.executeUpdate();
			
			userAdded = true;
			
			System.out.println("Record inserted into USERS table!");
			
		} catch (SQLException e) {
				
			userAdded = false;
			System.out.println(e.getMessage());
			
		} finally {
			if (ps != null) {
				ps.close();	
			}
			

			if (dbConnection != null) {
				dbConnection.close();
			}
		}
		
		return userAdded;
		
	}

}
